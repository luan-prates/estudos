var express = require('express');
var app = express();

const port = 3008
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database:'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Luan Prates')`
connection.query(sql)
connection.end()

app.get('/', function(req, res){
res.send("<h1>Luan Prates</h1><h2>Agora com Node.js e conectando a DB</h2>");
});

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`)
  })