const PORT = 5000;
const express = require("express");
const app = express();
const apiRoute = require("./routes/api");
const bodyParser = require("body-parser");
const orders = require("./models/historicoP");

app.get("/historicoPedidos", (req, res) => {
  res.json(JSON.stringify(orders.getALL()));
});

app.get("/new", bodyParser.json(), (req, res) => {
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

app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});

app.use("/api", apiRoute);
app.use(express.static("public"));
