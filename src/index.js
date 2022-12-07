const PORT = 3000;
const express = require('express');
const app = express();
const apiRoute = require('./routes/api');

app.listen( () => {
  console.log("Servidor rodando na porta", PORT)
})

app.use('/api', apiRoute);
app.use(express.static('public'));

