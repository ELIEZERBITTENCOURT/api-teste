const Sequelize = require('sequelize');
const db = require('./db');

const Filme = db.define('filme', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING(150),
        allowNull: false,
    },
    diretor: {
        type: Sequelize.STRING(140),
        allowNull: false,
    },
    atores: {
        type: Sequelize.STRING(200),
        allowNull: false,
    },
    genero: {
        type: Sequelize.STRING(20),
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING(240),
        allowNull: false,
    },
    voto:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
    
}, {
        timestamps: false
})

module.exports = Filme;