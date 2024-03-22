"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// module.exports = {
var _default = exports.default = {
  listar(req, res) {
    res.json({
      mensaje: "Lista de Categorias"
    });
  },
  guardar: function (req, res) {},
  mostrar: (req, res) => {
    res.json({
      mensaje: "Mostrando... " + req.params.id
    });
  },
  modificar: (req, res) => {},
  eliminar: (req, res) => {}
};