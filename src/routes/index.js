// const express = require("express");
import express from "express"
// const userController = require("./../controllers/user.controller")
import userController from "./../controllers/user.controller";
// const categoriaController = require("./../controllers/categoria.controller")
import categoriaController from "./../controllers/categoria.controller";
import authController from "./../controllers/auth.controller"
import productoController from "./../controllers/producto.controller"
import clienteController from "./../controllers/cliente.controller"
import pedidoController from "./../controllers/pedido.controller"

import { productoCheck } from '../helpers/validators'
import authMiddleware from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/", function(req, res){
    res.json({mensaje: "PAGINA DE INICIO"})
})

// auth
router.post('/auth/login', authController.login);
router.post('/auth/register', authController.register);
router.post('/auth/perfil', authMiddleware, authController.perfil);

router.get("/user", authMiddleware, userController.listar);
router.post("/user",authMiddleware, userController.guardar);
router.get("/user/:id",authMiddleware, userController.mostrar);
router.put("/user/:id", authMiddleware, userController.modificar);
router.delete("/user/:id", authMiddleware, userController.eliminar);

// rutas categoria
router.get("/categoria", authMiddleware, categoriaController.listar);
router.post("/categoria", authMiddleware, categoriaController.guardar);
router.get("/categoria/:id", authMiddleware, categoriaController.mostrar);
router.put("/categoria/:id", authMiddleware, categoriaController.modificar);
router.delete("/categoria/:id", authMiddleware, categoriaController.eliminar);

// rutas producto
router.get("/producto", authMiddleware, productoController.listar);
router.post("/producto", authMiddleware, productoCheck(), productoController.guardar);
router.get("/producto/:id", authMiddleware, productoController.mostrar);
router.put("/producto/:id", authMiddleware, productoController.modificar);
router.delete("/producto/:id", authMiddleware, productoController.eliminar);

// rutas cliente
router.get("/cliente", authMiddleware, clienteController.listar);
router.post("/cliente", authMiddleware, productoCheck(), clienteController.guardar);
router.get("/cliente/:id", authMiddleware, clienteController.mostrar);
router.put("/cliente/:id", authMiddleware, clienteController.modificar);
router.delete("/cliente/:id", authMiddleware, clienteController.eliminar);

// rutas pedido
router.get("/pedido", authMiddleware, pedidoController.listar);
router.post("/pedido", authMiddleware, pedidoController.guardar);



// module.exports = router
export default router