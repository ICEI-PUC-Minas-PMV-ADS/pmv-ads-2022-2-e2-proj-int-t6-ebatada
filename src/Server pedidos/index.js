const PORT = 5000;
const express = require('express');
const app = express();
const apiRoute = require('./routes/api');

app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT)
})

app.use('/api', apiRoute);
app.use(express.static('public'));

