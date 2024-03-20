// importar paquetes del core de node

// importar paquetes de terceros de (npm, yarn)
const express = require("express");

// importar paquetes locales
const rutas = require("./routes/index")

// configurar los paquetes necesarios
const app = express()
app.use(express.json()); // req.body (json)

// declarar variables auxiliares
const PORT = 3000

// configurar las rutas (end point)
app.use("/api", rutas)

// rutas(app)

// app.get("/", function(req, res){
//     res.json({mensaje: "Pagina inicio"});
// })


// levantar el servidor
app.listen(PORT, function(){
    // console.log("Servidor está iniciado en http://localhost:"+PORT);
    console.log(`Servidor está iniciado en http://localhost:${PORT}`);
})
