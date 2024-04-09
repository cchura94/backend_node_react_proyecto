import models from "./../database/models"

// module.exports = {
export default {
    async listar(req, res){
        try {
            const categorias = await models.Categoria.findAll();
            
            return res.status(200).json(categorias);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    guardar: async function(req, res){
        try {
            let datos = req.body;
            const categoria = await models.Categoria.create(datos);
            if(categoria.id){
                return res.status(201).json({mensaje: 'Categoria registrada'})
            }
            
            return res.status(422).json({error: true, mensaje: "Error al registrar la categoria"})

        } catch (error) {
            return res.status(500).json(error);
        }

    },
    mostrar: async (req, res) => {
        const id = req.params.id;

        const categoria = await models.Categoria.findByPk(id)
        return res.status(200).json(categoria);
    },
    modificar: async (req, res) => {
        try {
            const id = req.params.id;
            let datos = req.body;

            const categoria = await models.Categoria.findByPk(id)

            if(categoria){
                await models.Categoria.update(datos, {
                    where: {
                        id: categoria.id
                    }
                });
            }
            if(categoria.id){
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
            await models.Categoria.destroy({where: {id: id}})
            return res.status(200).json({error: true, mensaje: "La categoria ha sido eliminada "})
            
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}
