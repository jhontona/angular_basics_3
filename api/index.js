const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

let response;

app.get('/', function(req, res) {
    res.send('Angular api test')
});

app.get('/login/:name/:password', function(req, res) {    
    response = {
        user: req.params.name,
        password: req.params.password,
        login: false
    };
    if(req.params.name === 'user' && req.params.password === 'pass'){
        response.login = true;
    }
    res.send(response);
});

app.post('/login', function(req, res) {    
    response = {
        user: req.body.name,
        password: req.body.password,
        login: false
    };
    if(req.body.name === 'user' && req.body.password === 'pass'){
        response.login = true;
    }
    res.send(response);
});

let fruits = [
    {
    id: 1,
    nombre: 'manzana',
    precio: 500,
    img: 'https://i.pinimg.com/originals/63/64/fb/6364fbeede3157aac881ed9c088d9c26.png'
  },
  {
    id: 2,
    nombre: 'piña',
    precio: 1500,
    img: 'https://okdiario.com/img/recetas/2016/06/28/beneficios-pina.jpg'
  },
  {
    id: 3,
    nombre: 'banano',
    precio: 1500,
    img: 'https://yomercofacil.com/wp-content/uploads/2018/06/banano.jpg'
  }
];

app.get('/fruits', function(req, res) {    
    response = fruits;
    res.send(response);
});

app.get('/fruits/:id', function(req, res) {
    response = {
        id: req.params.id
    };    
    for (var i = 0; i < 3; i++){
        if(req.params.id == fruits[i].id){
            response = fruits[i];
        }
    }
    res.send(response);
});

app.listen(4201, () => {
    console.log("Servidor iniciado");
});