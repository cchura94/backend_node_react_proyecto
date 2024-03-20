module.exports = function rutas(app){

    app.get("/", function(req, res){
        res.json({mensaje: "Pagina inicio RUTAS"});
    })

    app.get("/user", function(req, res){
        res.json({mensaje: "Pagina de usuario RUTAS"});
    })

}