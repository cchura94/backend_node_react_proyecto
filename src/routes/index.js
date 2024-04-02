// const express = require("express");
import express from "express"
// const userController = require("./../controllers/user.controller")
import userController from "./../controllers/user.controller";
// const categoriaController = require("./../controllers/categoria.controller")
import categoriaController from "./../controllers/categoria.controller";
import authController from "./../controllers/auth.controller"
import productoController from "./../controllers/producto.controller"

const router = express.Router();

router.get("/", function(req, res){
    res.json({mensaje: "PAGINA DE INICIO"})
})

// auth
router.post('/auth/login', authController.login);
router.post('/auth/register', authController.register);
router.post('/auth/perfil', authController.perfil);

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

// rutas producto
router.get("/producto", productoController.listar);
router.post("/producto", productoController.guardar);
router.get("/producto/:id", productoController.mostrar);
router.put("/producto/:id", productoController.modificar);
router.delete("/producto/:id", productoController.eliminar);




// module.exports = router
export default router