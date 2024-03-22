"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _user = _interopRequireDefault(require("./../controllers/user.controller"));
var _categoria = _interopRequireDefault(require("./../controllers/categoria.controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// const express = require("express");

// const userController = require("./../controllers/user.controller")

// const categoriaController = require("./../controllers/categoria.controller")

const router = _express.default.Router();
router.get("/", function (req, res) {
  res.json({
    mensaje: "PAGINA DE INICIO"
  });
});
router.get("/user", _user.default.listar);
router.post("/user", _user.default.guardar);
router.get("/user/:id", _user.default.mostrar);
router.put("/user/:id", _user.default.modificar);
router.delete("/user/:id", _user.default.eliminar);

// rutas categoria
router.get("/categoria", _categoria.default.listar);
router.post("/categoria", _categoria.default.guardar);
router.get("/categoria/:id", _categoria.default.mostrar);
router.put("/categoria/:id", _categoria.default.modificar);
router.delete("/categoria/:id", _categoria.default.eliminar);

// module.exports = router
var _default = exports.default = router;