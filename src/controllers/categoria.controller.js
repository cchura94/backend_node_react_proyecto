
// module.exports = {
export default {
    listar(req, res){
        res.json({mensaje: "Lista de Categorias"});
    },
    guardar: function(req, res){

    },
    mostrar: (req, res) => {
        res.json({mensaje: "Mostrando... "+req.params.id});
    },
    modificar: (req, res) => {

    },
    eliminar: (req, res) => {

    }
}
