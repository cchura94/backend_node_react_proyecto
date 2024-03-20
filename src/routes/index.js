const express = require("express");
const userController = require("./../controllers/user.controller")
const categoriaController = require("./../controllers/categoria.controller")

const router = express.Router();

router.get("/", function(req, res){
    res.json({mensaje: "PAGINA DE INICIO"})
})

router.get("/user", userController.listar);
router.post("/user", userController.guardar);
router.get("/user/:id", userController.mostrar);
router.put("/user/:id", userController.modificar);
router.delete("/user/:id", userController.eliminar);

// rutas categoria
router.get("/categoria", categoriaController.listar);
router.post("/categoria", categoriaController.guardar);
router.get("/categoria/:id", categoriaController.mostrar);
router.put("/categoria/:id", categoriaController.modificar);
router.delete("/categoria/:id", categoriaController.eliminar);


module.exports = router