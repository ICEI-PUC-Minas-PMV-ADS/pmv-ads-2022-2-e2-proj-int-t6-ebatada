const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bd = require("../models/db")
const initModels = require("../models/init-models");
const models = initModels(bd);
const { Op } = require("sequelize");


(async () => {

  async function pedidos() {
    let pedidosBd = await models.pedidos.findAll({
      order: [['idpedido', 'DESC']],
      include: [
        {
          model: models.produtospedidos,
          as: "produtospedidos",
          include: {
            model: models.meiomeio,
            as: "meiomeios",
            include: [
              {
                model: models.produtos,
                as: "segundametade_produto"
              },
              {
                model: models.produtos,
                as: "segundoterco_produto"
              },
              {
                model: models.produtos,
                as: "terceiroterco_produto"
              },
              {
                model: models.produtos,
                as: "segundoquarto_produto"
              },
              {
                model: models.produtos,
                as: "terceiroquarto_produto"
              },
              {
                model: models.produtos,
                as: "quartoquarto_produto"
              }
            ]
          }
        },
        {
          model: models.clientes,
          as: "cliente_cliente"
        },
        {
          model: models.taxasentrega,
          as: "taxaentrega_taxasentrega"
        }
      ]
    })

    let pedidosJson = JSON.stringify(pedidosBd);
    let pedidos = JSON.parse(pedidosJson)


    for (i = 0; i < Object.keys(pedidos).length; i++) { //Para cada pedido
      for (p = 0; p < pedidos[i].produtospedidos.length; p++) { //Para cada produto do pedido
        let idprodutopedido = pedidos[i].produtospedidos[p].idprodutopedido;
        let idtamanhopedido = pedidos[i].produtospedidos[p].idtamanhopedido;
        //Configurando relação entre produto e tamanho de cada item do pedido
        let relacaoBd = await models.relacaoprodutotamanho.findOne({
          where: { idprodutorelacao: idprodutopedido, idtamanhorelacao: idtamanhopedido },
          include: [
            {
              model: models.tamanhos,
              as: "idtamanhorelacao_tamanho"
            },
            {
              model: models.produtos,
              as: "idprodutorelacao_produto",
              include: {
                model: models.categorias,
                as: "idcategoria_categoria"
              }
            }
          ]
        });
        let relacaoJson = JSON.stringify(relacaoBd);
        let relacao = JSON.parse(relacaoJson)
        pedidos[i].produtospedidos[p].relacaoprodutotamanho = relacao
        //Configurando relação entre meio a meio, produto e tamanho

        if (pedidos[i].produtospedidos[p].meiomeios.length != 0) {
          if (pedidos[i].produtospedidos[p].meiomeios[0].segundametade != null) {
            let idprodutometade = pedidos[i].produtospedidos[p].meiomeios[0].segundametade_produto.idproduto
            let relacaomeioBd = await models.relacaoprodutotamanho.findOne({ where: { idprodutorelacao: idprodutometade, idtamanhorelacao: idtamanhopedido } });
            let relacaoMeioJson = JSON.stringify(relacaomeioBd);
            let relacaoMeio = JSON.parse(relacaoMeioJson)
            pedidos[i].produtospedidos[p].meiomeios[0].segundametade_produto.relacaomeiotamanho = relacaoMeio
          }
          else if (pedidos[i].produtospedidos[p].meiomeios[0].segundoterco != null) {
            let idProdutoSegundoTerco = pedidos[i].produtospedidos[p].meiomeios[0].segundoterco_produto.idproduto
            let idProdutoTerceiroTerco = pedidos[i].produtospedidos[p].meiomeios[0].terceiroterco_produto.idproduto
            let relacaoSegundoBd = await models.relacaoprodutotamanho.findOne({ where: { idprodutorelacao: idProdutoSegundoTerco, idtamanhorelacao: idtamanhopedido } });
            let relacaoTerceiroBd = await models.relacaoprodutotamanho.findOne({ where: { idprodutorelacao: idProdutoTerceiroTerco, idtamanhorelacao: idtamanhopedido } });
            let relacaoSegundoJson = JSON.stringify(relacaoSegundoBd);
            let relacaoTerceiroJson = JSON.stringify(relacaoTerceiroBd);
            let relacaoSegundo = JSON.parse(relacaoSegundoJson)
            let relacaoTerceiro = JSON.parse(relacaoTerceiroJson)
            pedidos[i].produtospedidos[p].meiomeios[0].segundoterco_produto.relacaomeiotamanho = relacaoSegundo
            pedidos[i].produtospedidos[p].meiomeios[0].terceiroterco_produto.relacaomeiotamanho = relacaoTerceiro
          }
          else if (pedidos[i].produtospedidos[p].meiomeios[0].segundoquarto != null) {
            let idProdutoSegundoQuarto = pedidos[i].produtospedidos[p].meiomeios[0].segundoquarto_produto.idproduto
            let idProdutoTerceiroQuarto = pedidos[i].produtospedidos[p].meiomeios[0].terceiroquarto_produto.idproduto
            let idProdutoQuartoQuarto = pedidos[i].produtospedidos[p].meiomeios[0].quartoquarto_produto.idproduto
            let relacaoSegundoBd = await models.relacaoprodutotamanho.findOne({ where: { idprodutorelacao: idProdutoSegundoQuarto, idtamanhorelacao: idtamanhopedido } });
            let relacaoTerceiroBd = await models.relacaoprodutotamanho.findOne({ where: { idprodutorelacao: idProdutoTerceiroQuarto, idtamanhorelacao: idtamanhopedido } });
            let relacaoQuartoBd = await models.relacaoprodutotamanho.findOne({ where: { idprodutorelacao: idProdutoQuartoQuarto, idtamanhorelacao: idtamanhopedido } });
            let relacaoSegundoJson = JSON.stringify(relacaoSegundoBd);
            let relacaoTerceiroJson = JSON.stringify(relacaoTerceiroBd);
            let relacaoQuartoJson = JSON.stringify(relacaoQuartoBd);
            let relacaoSegundo = JSON.parse(relacaoSegundoJson)
            let relacaoTerceiro = JSON.parse(relacaoTerceiroJson)
            let relacaoQuarto = JSON.parse(relacaoQuartoJson)
            pedidos[i].produtospedidos[p].meiomeios[0].segundoquarto_produto.relacaomeiotamanho = relacaoSegundo
            pedidos[i].produtospedidos[p].meiomeios[0].terceiroquarto_produto.relacaomeiotamanho = relacaoTerceiro
            pedidos[i].produtospedidos[p].meiomeios[0].quartoquarto_produto.relacaomeiotamanho = relacaoQuarto
          }
        }
      }
    }
    return pedidos
  }


  async function produtos() {
    const produtos = await models.produtos.findAll({
      include: [{
        model: models.tamanhos,
        as: 'idtamanhorelacao_tamanhos'
      },
      {
        model: models.categorias,
        as: 'idcategoria_categoria'
      }

      ]
    })

    return produtos
  }

  router.put("/trocarclientepedido", bodyParser.json(), async (req, res) => {
    (async () => {
      let idPedido = req.body.idpedido;
      let idCliente = req.body.idcliente;



      await models.pedidos.update({ cliente: idCliente }, { where: { idpedido: idPedido } });


    })().then(async () => {
      let pedidosAtualizados = await pedidos();
      return res.json({
        mensagem: "cliente do pedido alterado com sucesso",
        requisicao: req.body,
        pedidos: pedidosAtualizados
      })
    }

    ).catch((error) => {
      return res.json({
        mensagem: "houve algum erro ao alterar o cliente",
        Erro: error,
        requisicao: req.body
      })
    })
  })

  router.delete("/excluirproduto", bodyParser.json(), async (req, res) => {
    (async () => {
      let idProdutoCarrinho = req.body.idprodutocarrinho

      const linhaMeio = await models.meiomeio.findOne({
        where: { idprodutocarrinho: idProdutoCarrinho },
      });

      if (linhaMeio != null) {
        await models.meiomeio.destroy({ where: { idprodutocarrinho: idProdutoCarrinho } })
      }

      await models.produtospedidos.destroy({ where: { idprodutocarrinho: idProdutoCarrinho } })

    })().then(async () => {
      let pedidosAtualizados = await pedidos();
      return res.json({
        mensagem: "produto excluido com sucesso",
        requisicao: req.body,
        pedidos: pedidosAtualizados
      })
    }

    ).catch((error) => {
      return res.json({
        mensagem: "houve algum erro ao excluir o produto",
        Erro: error,
        requisicao: req.body
      })
    })
  })

  router.post("/adicionarproduto", bodyParser.json(), async (req, res) => {
    (async () => {
      let idPedido = req.body.idpedido;
      let idProdutoPedido = req.body.idprodutopedido;
      let idTamanhoPedido = req.body.idtamanhopedido;
      let quantidade = req.body.quantidade;
      let segundaMetade = req.body.meiomeios[0].segundametade
      let segundoTerco = req.body.meiomeios[0].segundoterco
      let terceiroTerco = req.body.meiomeios[0].terceiroterco
      let segundoQuarto = req.body.meiomeios[0].segundoquarto
      let terceiroQuarto = req.body.meiomeios[0].terceiroquarto
      let quartoQuarto = req.body.meiomeios[0].quartoquarto

      await models.produtospedidos.findOrCreate({
        where: { idpedido: idPedido, idprodutopedido: idProdutoPedido, idtamanhopedido: idTamanhoPedido, quantidade: quantidade }
      })

      const produtoPedidoBd = await models.produtospedidos.findOne({
        where: { idpedido: idPedido, idprodutopedido: idProdutoPedido, idtamanhopedido: idTamanhoPedido, quantidade: quantidade }
      })

      let produtoPedidoJson = JSON.stringify(produtoPedidoBd);
      let produtoPedido = JSON.parse(produtoPedidoJson)

      console.log(produtoPedido)

      let idProdutoCarrinho = produtoPedido.idprodutocarrinho



      await models.meiomeio.findOrCreate({
        where: { idprodutocarrinho: idProdutoCarrinho },
        defaults: { segundametade: segundaMetade, segundoterco: segundoTerco, terceiroterco: terceiroTerco, segundoquarto: segundoQuarto, terceiroquarto: terceiroQuarto, quartoquarto: quartoQuarto }
      })

    })().then(async () => {
      let pedidosAtualizados = await pedidos();
      return res.json({
        mensagem: "produto adicionado com sucesso",
        requisicao: req.body,
        pedidos: pedidosAtualizados
      })
    }

    ).catch((error) => {
      return res.json({
        mensagem: "houve algum erro ao adicionar o produto",
        Erro: error,
        requisicao: req.body
      })
    })
  })

  router.put("/editarprodutocarrinho", bodyParser.json(), async (req, res) => {
    (async () => {
      let idProdutoCarrinho = req.body.idprodutocarrinho;
      let idProdutoPedido = req.body.idprodutopedido;
      let idTamanhoPedido = req.body.idtamanhopedido;
      let quantidade = req.body.quantidade;
      let segundaMetade = req.body.meiomeios[0].segundametade
      let segundoTerco = req.body.meiomeios[0].segundoterco
      let terceiroTerco = req.body.meiomeios[0].terceiroterco
      let segundoQuarto = req.body.meiomeios[0].segundoquarto
      let terceiroQuarto = req.body.meiomeios[0].terceiroquarto
      let quartoQuarto = req.body.meiomeios[0].quartoquarto

      await models.produtospedidos.update({ idprodutopedido: idProdutoPedido, idtamanhopedido: idTamanhoPedido, quantidade: quantidade }, { where: { idprodutocarrinho: idProdutoCarrinho } })

      await models.meiomeio.findOrCreate({
        where: { idprodutocarrinho: idProdutoCarrinho },
        defaults: { segundametade: segundaMetade, segundoterco: segundoTerco, terceiroterco: terceiroTerco, segundoquarto: segundoQuarto, terceiroquarto: terceiroQuarto, quartoquarto: quartoQuarto }
      })

      await models.meiomeio.update({ segundametade: segundaMetade, segundoterco: segundoTerco, terceiroterco: terceiroTerco, segundoquarto: segundoQuarto, terceiroquarto: terceiroQuarto, quartoquarto: quartoQuarto }, { where: { idprodutocarrinho: idProdutoCarrinho } })



    })().then(async () => {
      let pedidosAtualizados = await pedidos();
      return res.json({
        mensagem: "produto editado com sucesso",
        requisicao: req.body,
        pedidos: pedidosAtualizados
      })
    }

    ).catch((error) => {
      return res.json({
        mensagem: "houve algum erro ao editar o produto",
        Erro: error,
        requisicao: req.body
      })
    })
  })


  router.get("/produtos", async (req, res) => {
    (async () => {
      return produtos();
    })().then((produtos) => {
      return res.json(produtos)
    }).catch((error) => {
      return res.json({
        mensagem: "Houve algum erro ao encontrar os pedidos",
        Erro: error,
      })
    });
  });




  router.get("/pedidos", async (req, res) => {
    (async () => {
      return pedidos();
    })().then((pedidos) => {
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
    await models.clientes.findAll()
      .then((clientes) => {
        return res.json(clientes)
      }).catch((error) => {
        return res.json({
          mensagem: "Houve algum erro ao encontrar os clientes",
          Erro: error,
        })
      });
  });



  router.post("/novocliente", bodyParser.json(), async (req, res) => {
    (async () => {
      let nome = req.body.nome;
      let telefoneprimario = req.body.telefoneprimario;
      let telefonesecundario = req.body.telefonesecundario;
      let rua = req.body.rua;
      let numero = req.body.numero;
      let bairro = req.body.bairro;
      let complemento = req.body.complemento;
      let referencia = req.body.referencia;

      await models.clientes.create({ nome: nome, telefoneprimario: telefoneprimario, telefonesecundario: telefonesecundario, rua: rua, numero: numero, bairro: bairro, complemento: complemento, referencia: referencia })

      const cliente = await models.clientes.findOne({
        where: { nome: nome, telefoneprimario: telefoneprimario, telefonesecundario: telefonesecundario, rua: rua, numero: numero, bairro: bairro, complemento: complemento, referencia: referencia },
      })

      return cliente
    })().then(async (cliente) => {
      let clientesAtualizados = await models.clientes.findAll();
      return res.json({
        mensagem: "cliente cadastrado com sucesso",
        cliente: cliente,
        clientes: clientesAtualizados
      })
    }

    ).catch((error) => {
      return res.json({
        mensagem: "houve algum erro ao cadastrar o cliente",
        Erro: error,
        requisicao: req.body
      })
    })

  });

})();



module.exports = router;