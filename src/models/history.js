import db from '../models/index'

'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Docter_Clinic_Specialty,
        {
            foreignKey: "doctorId",
            as: "Docter_Clinic_Specialty"
        })
    }
  }
  History.init({
    patientId: DataTypes.STRING,
    doctorId: DataTypes.INTEGER,
    desciption: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};
