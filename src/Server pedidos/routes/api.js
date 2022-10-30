const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const clientes = require("../models/clientes");

(async () => {
  
  router.get("/clientes", async (req, res) => {
    const todosClientes = await clientes.pegarClientes();
    res.json(JSON.stringify(todosClientes));
  });

  router.post("/novocliente", bodyParser.json(), (req, res) => {
    let nome = req.body.nome;
    let telefoneprimario = req.body.telefoneprimario;
    let telefonesecundario = req.body.telefonesecundario;
    let rua = req.body.rua;
    let numero = req.body.numero;
    let bairro = req.body.bairro;
    let complemento = req.body.complemento;
    let referencia = req.body.referencia;

    clientes.novoCliente(nome, telefoneprimario, telefonesecundario, rua, numero, bairro, complemento, referencia);

    res.send("Cliente criado com sucesso")
  });
})();



module.exports = router;