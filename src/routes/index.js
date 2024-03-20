const express = require("express");
const userController = require("./../controllers/user.controller")

const router = express.Router();

router.get("/", function(req, res){
    res.json({mensaje: "PAGINA DE INICIO"})
})

router.get("/user", userController.listar);
router.post("/user", userController.guardar);
router.get("/user/:id", userController.mostrar);
router.put("/user/:id", userController.modificar);
router.delete("/user/:id", userController.eliminar);


module.exports = router