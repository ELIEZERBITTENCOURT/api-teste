# SEQUENCIA DO PROJETO #
## Como rodar projeto baixado ##

Instalar todas as dependências indicadas pelo package.json:
### npm install

Rodar o projeto
### node app.js

Para gerenciar as requisições, rotas e URLs:
### npm install express

Instalar dependência como desenvolvedor para reiniciar o servidor sempre que houver alteração no código:
### npm install --save-dev nodemon

Obs: Instale primeiro de forma global somente se nunca instalou a dependência na máquina, após instalar, reiniciar a máquina:
### npm install -g nodemon

Instalar módulo para criptografar a senha:
### npm install --save bcryptjs

Instalar a dependência para JWT:
### npm install --save jsonwebtoken

Instalar Sequelize biblioteca para facilitar o gerenciamento de um banco de dados SQL:
### npm install --save sequelize

Instalar o drive do banco de dados, foi utilizado o MySQL por familiaridade:
### npm install --save mysql2

COMANDO PARA CRIAR BASE DE DADOS NO MYSQL:
### CREATE DATABASE api CHARACTHER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
