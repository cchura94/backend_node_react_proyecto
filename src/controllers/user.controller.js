/*
const { Sequelize, DataTypes } = require('sequelize');
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('node_test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  async function testBD() {
    try {
        await sequelize.authenticate();
        console.log('CONECCION CON BD CORRECTO.');
      } catch (error) {
        console.error('ERROR DE CONEXION CON BD:', error);
      }
  }

  testBD();


  const User = sequelize.define('User', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    password: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });
  
  // `sequelize.define` also returns the model
  console.log(User === sequelize.models.User); // true

  User.sync()
*/

import models from "./../database/models"
let usuarios = [];

module.exports = {
    async listar(req, res){

        usuarios = await models.User.findAll();
        // usuarios = await User.findAll()
        return res.status(200).json(usuarios);
    },
    guardar: function(req, res){
        // req.params.id // /api/user/6
        // req.query.buscar // /api/user?buscar=pablo
        
        let datos = req.body; // { name: "admin", email: "admin@mail.com", password: "admin54321" };
        console.log(datos)
        usuarios.push(datos);
        
        return res.status(200).json({mensaje: "Usuario registrado..."});
    },
    mostrar: (req, res) => {
        let id = req.params.id
        let registro = usuarios.splice(id, 1);
        return res.status(200).json(registro);
    },
    modificar: (req, res) => {

    },
    eliminar: (req, res) => {

    }
}
