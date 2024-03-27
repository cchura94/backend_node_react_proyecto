import models from "./../database/models"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export default {
    login: async (req, res) => {
        const {email, password} = req.body;

        let user = await models.User.findOne({
            where: {email:email}
        })
        if(!user){
            return res.status(422).json({message: "Credenciales Incorrectas"});
        }

        // verificar la contraseña
        let success = await bcrypt.compare(password, user.password);

        if(success){
            // Generar JWT
            let payload = {
                id: user.id,
                email: user.email,
                time: new Date()
            }

            const token  = jwt.sign(payload, "MI_CODIGO_SECRETO", {
                expiresIn: 60*60
            })
            
            return res.status(200).json({
                access_token: token,
                usuario: user,
                error: false
            })

        }else{
            return res.status(422).json({message: "Credenciales Incorrectas"})
        }
    
    },
    
    register: async (req, res) => {

        const {name, email, password} = req.body;
        // verificar si el usuario con el email (existe)
        let user = await models.User.findOne({
            where: {
                email: email
            }
        })
        // existe o no existe
        if(!user){
            // encriptar la contraseña
            const hash = await bcrypt.hash(password, 12);
            // guardar usuario
            await models.User.create({name, email, password: hash})
            return res.status(201).json({
                message: "Usuario registrado"
            })

        }else{
            return res.status(422).json({message: "El correo ya está en uso"});
        }   
    },
    
    perfil: function(req, res){
    
    }
}