import { Op } from "sequelize";
import models from "./../database/models"
import { validationResult } from "express-validator";

export default {
    async listar(req, res){
        // /api/producto?page=1&limit=10&q=
        try {
            const q = req.query.q;
            const page = parseInt(req.query.page)
            const limit = parseInt(req.query.limit)


            const offset = (page - 1) * limit

            const productos = await models.Producto.findAndCountAll({
                where: {
                    nombre: {
                        [Op.like]: `%${q}%`
                    }
                },
                // include: [models.Categoria],
                offset: offset,
                limit: limit
            });

            return res.status(200).json(productos);

            
        } catch (error) {
            return res.status(500).json(error);
        }        
    },
    guardar: async function(req, res){
        try {
            // validando
            let errors = validationResult(req);
            if(!errors.isEmpty()) {
                return res.status(422).json({errors: errors.array()})
            }

            // guardar
            const datos = req.body;
            const producto = await models.Producto.create(datos)
            if(producto.id) {
                return res.status(201).json({message: "producto registrado"})
            }
        } catch (error) {
            return res.status(422).json({message: error.message})            
        }
    },
    mostrar: (req, res) => {
        
    },
    modificar: async (req, res) => {
        try {
            const id = req.params.id;
            const datos = req.body;

            const producto = await models.Producto.findByPk(id);
            if(producto){
                await models.Producto.update(datos, {
                    where: {
                        id: producto.id
                    }
                })
            }

            if(producto.id) {
                return res.status(200).json({message: "producto actualizado"})
            }
            
        } catch (error) {
            return res.status(422).json({message: error.message}) 
        }

    },
    eliminar: (req, res) => {

    }
}