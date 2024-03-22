"use strict";

let usuarios = [];
module.exports = {
  listar(req, res) {
    return res.status(200).json(usuarios);
  },
  guardar: function (req, res) {
    // req.params.id // /api/user/6
    // req.query.buscar // /api/user?buscar=pablo

    let datos = req.body; // { name: "admin", email: "admin@mail.com", password: "admin54321" };
    console.log(datos);
    usuarios.push(datos);
    return res.status(200).json({
      mensaje: "Usuario registrado..."
    });
  },
  mostrar: (req, res) => {
    let id = req.params.id;
    let registro = usuarios.splice(id, 1);
    return res.status(200).json(registro);
  },
  modificar: (req, res) => {},
  eliminar: (req, res) => {}
};