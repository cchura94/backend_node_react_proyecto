import models from "./../database/models"

// module.exports = {
export default {
    async listar(req, res){
        try {
            const clientes = await models.Cliente.findAll();
            
            return res.status(200).json(clientes);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    guardar: async function(req, res){
        try {
            let datos = req.body;
            const cliente = await models.Cliente.create(datos);
            if(cliente.id){
                return res.status(201).json({mensaje: 'cliente registrada'})
            }
            
            return res.status(422).json({error: true, mensaje: "Error al registrar la categoria"})

        } catch (error) {
            return res.status(500).json(error);
        }

    },
    mostrar: async (req, res) => {
        const id = req.params.id;

        const cliente = await models.Cliente.findByPk(id)
        return res.status(200).json(cliente);
    },
    modificar: async (req, res) => {
        try {
            const id = req.params.id;
            let datos = req.body;

            const cliente = await models.Cliente.findByPk(id)

            if(cliente){
                await models.Cliente.update(datos, {
                    where: {
                        id: cliente.id
                    }
                });
            }
            if(cliente.id){
                return res.status(201).json({mensaje: 'Categoria Actualizada'})
            }
            
            return res.status(422).json({error: true, mensaje: "Error al registrar la categoria"})

        } catch (error) {
            return res.status(500).json(error);
        }
    },
    eliminar: async (req, res) => {
        try {
            const id = req.params.id;
            await models.Cliente.destroy({where: {id: id}})
            return res.status(200).json({error: true, mensaje: "La categoria ha sido eliminada "})
            
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}
