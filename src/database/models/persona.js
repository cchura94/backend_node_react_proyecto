'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Persona.belongsTo(models.User);
    }
  }
  Persona.init({
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    ci: DataTypes.STRING,
    genero: DataTypes.STRING,
    fecha_nac: DataTypes.DATE,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};