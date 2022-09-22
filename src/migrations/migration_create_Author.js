'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('authors', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
      nameAuthor: {
        type: Sequelize.STRING
      },
      namSinh: {
        type: Sequelize.STRING
      },
      queQuan: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('authors');
  }
};