import { Op } from "sequelize";
import models from "./../database/models"
import { validationResult } from "express-validator";

export default {
    async listar(req, res){
        // /api/Pedido?page=1&limit=10&q=
        try {
            const q = req.query.q;
            const page = parseInt(req.query.page)
            const limit = parseInt(req.query.limit)


            const offset = (page - 1) * limit

            const pedidos = await models.Pedido.findAndCountAll({
                where: {
                    fecha: {
                        [Op.like]: `%${q}%`
                    }
                },
                // include: [models.Categoria],
                offset: offset,
                limit: limit
            });

            return res.status(200).json(pedidos);

            
        } catch (error) {
            return res.status(500).json(error);
        }        
    },
    guardar: async function(req, res){
        try {
            // validando
            // let errors = validationResult(req);
            // if(!errors.isEmpty()) {
            //     return res.status(422).json({errors: errors.array()})
            // }
            const {clienteId, productos} = req.body;
            const fecha = new Date();

            // nuevo Pedido
            const pedido = await models.Pedido.create({fecha:fecha, estado: 1, clienteId:clienteId});

            // asignar productos
            productos.forEach(async (obj) => {
                const prod = await models.Producto.findOne({where: {id: obj.productoId}});
                pedido.addProducto(prod, {through: {cantidad: obj.cantidad}})
            });
            // guardar
            if(pedido.id) {
                return res.status(201).json({message: "pedido registrado"})
            }
        } catch (error) {
            return res.status(422).json({message: error.message})            
        }
    },
    mostrar: (req, res) => {
        
    },
    
}