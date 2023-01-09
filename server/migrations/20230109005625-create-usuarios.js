'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING(8),
        allowNull: false
    },
    eAdmin:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario');
  }
};
