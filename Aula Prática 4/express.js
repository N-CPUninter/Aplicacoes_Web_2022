var express = require('express');
var porta = "3000";

var app = express();

app.get('/', function(req,res){
    res.send("<h1> Site Principal</h1>");
    });

    app.get('/aula', function(req,res){
        res.send("<h1> Aula com Node.js!!!</h1>");
        });    

    app.get('/sobre', function(req,res){
        res.send("<h1> Mostra informações sobre o sistema </h1>");
        });    

    app.listen(porta, function(){
      console.log("Servidor na porta: ", porta);
        });    