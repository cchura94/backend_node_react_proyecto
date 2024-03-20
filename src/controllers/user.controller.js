module.exports = {
    listar(req, res){
        res.json({mensaje: "Lista de Usuarios"});
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
