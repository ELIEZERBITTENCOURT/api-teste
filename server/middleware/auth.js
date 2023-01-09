const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = {
    eAdmin: async function (req, res, next){
        const authHeader = req.headers.authorization;
        
        if(!authHeader){
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Necessário realizar o login para acessar a página!"
            });
        }

        const [, token ]= authHeader.split(' ');

        if(!token){
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Necessário realizar o login para acessar a página!"
            });
        }

        try{
            const decode = await promisify(jwt.verify)(token, process.env.SECRET);
            req.userId = decode.id;
            return next();
        }catch(err){
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Necessário realizar o login para acessar a página! Token inválido!"
            });
        }

    }
}