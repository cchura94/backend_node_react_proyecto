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

import { Op } from "sequelize";
import models from "./../database/models"
let usuarios = [];

module.exports = {
    async listar(req, res){

      const q = req.query.q || '';
            const page = parseInt(req.query.page) || 1
            const limit = parseInt(req.query.limit) || 10


            const offset = (page - 1) * limit

        const usuarios = await models.User.findAndCountAll({
            where: {
              name: {
                  [Op.like]: `%${q}%`
              }
          },
          // include: [models.Categoria],
          offset: offset,
          limit: limit
          });
        // usuarios = await User.findAll()
        return res.status(200).json(usuarios);
    },
    guardar: async function(req, res){
        // req.params.id // /api/user/6
        // req.query.buscar // /api/user?buscar=pablo
        
        // let datos = req.body; // { name: "admin", email: "admin@mail.com", password: "admin54321" };
        // console.log(datos)
        // usuarios.push(datos);

        try {
          let datos = req.body;
            const user = await models.User.create(datos);
            if(user.id){
                return res.status(201).json({mensaje: 'Usuario registrado'})
            }
            
            return res.status(422).json({error: true, mensaje: "Error al registrar el usuario"})

        } catch (error) {
            return res.status(500).json(error);
        }
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
