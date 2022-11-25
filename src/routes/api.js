const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bd = require("../models/db")

const initModels = require("../models/init-models");
const sequelize = require('../models/db');
const models = initModels(bd);
const { Op } = require("sequelize");

(async () => {

  router.get("/pedidos", async (req, res) => {
    await models.pedidos.findAll({
      order: [['idpedido', 'DESC']],
      include: ["cliente_cliente", "taxaentrega_taxasentrega"],
    }).then((pedidos) => {
      return res.json(pedidos)
    }).catch((error) => {
      return res.json({
        mensagem: "Houve algum erro ao encontrar os pedidos",
        Erro: error,
      })
    }
    )
  });


  router.get("/pedidosdata", async (req, res) => {
    let mes = req.query.mes;
    let dia = req.query.dia;
    let ames = req.query.ames;
    let adia = req.query.adia;
    let dataAtual = new Date();
    let data = new Date(mes + " " + dia + " " + dataAtual.getFullYear());
    let adata = new Date(ames + " " + adia + " " + dataAtual.getFullYear());

    console.log(data)

    await models.pedidos.findAll({
      order: [['idpedido', 'DESC']],
      include: ["cliente_cliente", "taxaentrega_taxasentrega"],
      where: {
        abertoem: {
          [Op.between]: [data, adata],
        }
      },

    }).then((pedidos) => {
      return res.json(pedidos)
    }).catch((error) => {
      return res.json({
        mensagem: "Houve algum erro ao encontrar os pedidos",
        Erro: error,
      })
    }
    )
  }
  );


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