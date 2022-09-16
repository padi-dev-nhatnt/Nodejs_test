'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('allcodes', {
    
      key: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      value_En: {
        type: Sequelize.STRING
      },
      value_Vi: {
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
    await queryInterface.dropTable('allcodes');
  }
};