"use strict";

var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("./routes/index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// importar paquetes del core de node

// importar paquetes de terceros de (npm, yarn)
// const express = require("express");

// importar paquetes locales
// const rutas = require("./routes/index")

// configurar los paquetes necesarios
const app = (0, _express.default)();
app.use(_express.default.json()); // req.body (json)

// declarar variables auxiliares
const PORT = 3000;

// configurar las rutas (end point)
app.use("/api", _index.default);

// rutas(app)

// app.get("/", function(req, res){
//     res.json({mensaje: "Pagina inicio"});
// })

// levantar el servidor
app.listen(PORT, function () {
  // console.log("Servidor está iniciado en http://localhost:"+PORT);
  console.log(`Servidor está iniciado en http://localhost:${PORT}`);
});