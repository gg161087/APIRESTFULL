const express = require('express');
const mysql = require('mysql');
const global_consts = require('./consts/global_consts');
const port = global_consts.PORT

const app = express();

const conn = mysql.createConnection({
    host: global_consts.DB_HOST,
    user: global_consts.DB_USERNAME,
    password: global_consts.DB_PASSWORD,
    database: global_consts.DB_NAME
});

conn.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion a la base de datos exitosa')
    }
});

app.get('/', function(req, res){
    res.send('Ruta de Inicio');
});

app.get('/api/articulos', (req, res)=>{
    conn.query('select * from articulos', (error, rows)=>{
        if(error){
            throw error;
        }else{
            res.send(rows);
        }
    })
});

app.listen(port, function(){
    console.log('Server ON http://127.0.0.1:'+port)
});