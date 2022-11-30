const express = require('express');
const mysql = require('mysql');
const global_consts = require('./consts/global_consts');
const port = global_consts.PORT

const app = express();

app.get('/', function(req, res){
    res.send('Ruta de Inicio');
})

app.listen(port, function(){
    console.log('Server ON http://127.0.0.1:'+port)
})