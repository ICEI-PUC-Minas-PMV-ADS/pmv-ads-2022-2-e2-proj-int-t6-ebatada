const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const orders = require("../models/historicoP");
const clientes = require("../models/clientes");

router.get("/historicoPedidos", async (req, res) => {
  const allOrders = await orders.pushOrders();
  res.json(JSON.stringify(allOrders));
});

router.get("/new", bodyParser.json(), (req, res) => {
  let emissao = req.body.emissao;
  let cliente = req.body.cliente;
  let telefone = req.body.telefone;
  let endereco = req.body.endereco;
  let status = req.body.status;
  let pago = req.body.pago;
  let itens = req.body.itens;
  let desconto = req.body.desconto;
  let total_final = req.body.total_final;

  orders.newOrder(
    emissao,
    cliente,
    telefone,
    endereco,
    status,
    pago,
    itens,
    desconto,
    total_final
  );
  res.send("pedido adicionado");
});

module.exports = router;
