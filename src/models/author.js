'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Book,
        {
            foreignKey: "tacGia",
            as: "ats"
        })

    }
  }
  Author.init({
    nameAuthor: DataTypes.STRING,
    namSinh: DataTypes.STRING,
    queQuan: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};
