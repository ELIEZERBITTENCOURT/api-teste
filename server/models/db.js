const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
.then(() => {
    console.log("Conexão com o banco de dados realizado com sucesso!");
}).catch( (erro)=> {
    console.log("Erro: Falha na conexão com o banco de dados! Erro gerado: " + erro);
});

module.exports = sequelize;