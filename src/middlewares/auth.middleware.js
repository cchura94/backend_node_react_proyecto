import jwt from "jsonwebtoken"

const auth = (req, res, next) => {
    let token = null
    console.log(req.headers.authorization)
    if(req.headers.authorization) {
        // Bearer ABC.XYZ.ASD
        token = req.headers.authorization.split(' ')[1];
    }
    if(!token) {
        return res.status(401).json({message: "No se proporcionó token de seguridad"});
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, decode) => {
        if(error) {
            return res.status(401).json({
                auth: false,
                message: 'El token ingresado es incorrecto o ha expirado'
            })
        }
        next();
    })
}

export default auth;