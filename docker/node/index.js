var express = require('express');
var app = express();
const port = 3000

app.get('/', function(req, res){
res.send("<h1>Luan Prates</h1><h2>Agora com Node.js</h2>");
});

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`)
  })