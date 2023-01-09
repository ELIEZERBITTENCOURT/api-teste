const express = require('express');
const cors = require('cors');
require("dotenv-safe").config();
const app = express();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const { eAdmin } = require('./middleware/auth');
const Usuario = require('./models/Usuario');
const Filme = require('./models/Filme');

app.use(express.json());
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "http://localhost:8080")
    res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE');
    app.use(cors());
    next();
});

app.get('/', async (req, res) => {
    await User.findAll({
        attributes:['id', 'name', 'email', 'role'],
        order:[['id', "DESC"]]
    })
    .then((users) => {
        return res.json({
            erro: false,
            users,
            id_usuario_logado: req.userId
        });
    }).catch(()=>{
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Nenhum usuário cadastrado!"
        });
    });
});

app.post('/cadastrarUsuario', eAdmin, async (req, res) => {
    var dados = req.body;
    dados.password = await bcrypt.hash(dados.password, 8);

    await Usuario.create(dados)
    .then(()=> {
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        });
    }).catch(()=>{
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Falha no cadastramento do usuário!"
        });
    });
});

app.post('/login', async (req, res) => {

    const user = await Usuario.findOne({
        attributes:['id', 'name', 'email','password'],
        where:{
            email:req.body.email
        }
    });

    if(user === null){
            return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não encontrado!"
        });
    }

    if(!(await bcrypt.compare(req.body.password, user.password))){
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário ou a senha incorreta!"
        });
    }

    var token = jwt.sign({id: user.id}, process.env.SECRET, {
        expiresIn: 600 //10 min
    });

    return res.json({
        erro: false,
        mensagem: "Login realizado com sucesso!",
        token
    });
});

app.post('/logout', function(req, res) {
    res.json({ auth: false, token: null });
})

app.put('/cadastro/:id', (req,res)=>{
    const user = Usuario.updateOne({id: req.params.id}, req.body, (err)=>{
        if(err) return res.status(400).json({
            error: true,
            message: "Erro: Cadastro nao editado"
        })
        return res.status(400).json({
            error: false,
            message: "Cadastro editado"
        });
    });
});

app.delete('/cadastro/:id', (req, res) =>{
    const user = Usuario.deleteOne({id: req.params.id}, (err)=>{
        if(err) return res.status(400).json({
            error: true,
            message: "Erro: Cadastro nao deletado"
        })
        return res.status(400).json({
            error: false,
            message: "Cadastro deletado"
        });
    });
});

app.get('./filme', (req, res)=>{
    Filme.find({}).then((filme) =>{
        return res.json(filme);
    }).catch((erro)=>{
        return res.status(400).json({
            error: true,
            message: "Nenhum filme encontrado!"
        });
    });
});

app.get('./filme/:id', (req, res)=>{
    Filme.find({titulo:req.params.titulo}).then((filme) =>{
        return res.json(filme);
    }).catch((erro)=>{
        return res.status(400).json({
            error: true,
            message: "Filme não encontrado!"
        });
    });
});

app.get('./filme/:id', (req, res)=>{
    Filme.find({diretor:req.params.diretor}).then((filme) =>{
        return res.json(filme);
    }).catch((erro)=>{
        return res.status(400).json({
            error: true,
            message: "Filme desse diretor não encontrado!"
        });
    });
});

app.get('./filme/:id', (req, res)=>{
    Filme.find({atores:req.params.atores}).then((filme) =>{
        return res.json(filme);
    }).catch((erro)=>{
        return res.status(400).json({
            error: true,
            message: "Filme com esse artista não encontrado!"
        });
    });
});


app.get('./filme/:id', (req, res)=>{
    Filme.find({genero:req.params.genero}).then((filme) =>{
        return res.json(filme);
    }).catch((erro)=>{
        return res.status(400).json({
            error: true,
            message: "Gênero de filme não encontrado!"
        });
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});