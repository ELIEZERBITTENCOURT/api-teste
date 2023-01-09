const Sequelize = require('sequelize');
const db = require('./db');

const Usuario = db.define('usuario', {
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
}, {
    timestamps: false
})

module.exports = Usuario;
