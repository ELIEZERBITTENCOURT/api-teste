'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('filme', {
      _id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
      },
      titulo: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      diretor: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      atores: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      genero: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      descricao: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      voto:{
          type: Sequelize.INTEGER,
          allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('filmes');
  }
};
