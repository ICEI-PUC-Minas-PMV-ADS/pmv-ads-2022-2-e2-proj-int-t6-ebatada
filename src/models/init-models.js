var DataTypes = require("sequelize").DataTypes;
var _categorias = require("./categorias");
var _clientes = require("./clientes");
var _lojas = require("./lojas");
var _meiomeio = require("./meiomeio");
var _pedidos = require("./pedidos");
var _produtos = require("./produtos");
var _produtospedidos = require("./produtospedidos");
var _relacaoprodutotamanho = require("./relacaoprodutotamanho");
var _tamanhos = require("./tamanhos");
var _taxasentrega = require("./taxasentrega");

function initModels(sequelize) {
  var categorias = _categorias(sequelize, DataTypes);
  var clientes = _clientes(sequelize, DataTypes);
  var lojas = _lojas(sequelize, DataTypes);
  var meiomeio = _meiomeio(sequelize, DataTypes);
  var pedidos = _pedidos(sequelize, DataTypes);
  var produtos = _produtos(sequelize, DataTypes);
  var produtospedidos = _produtospedidos(sequelize, DataTypes);
  var relacaoprodutotamanho = _relacaoprodutotamanho(sequelize, DataTypes);
  var tamanhos = _tamanhos(sequelize, DataTypes);
  var taxasentrega = _taxasentrega(sequelize, DataTypes);

  produtos.belongsToMany(tamanhos, { as: 'idtamanho_tamanhos', through: relacaoprodutotamanho, foreignKey: "idproduto", otherKey: "idtamanho" });
  tamanhos.belongsToMany(produtos, { as: 'idproduto_produtos', through: relacaoprodutotamanho, foreignKey: "idtamanho", otherKey: "idproduto" });
  produtos.belongsTo(categorias, { as: "idcategoria_categoria", foreignKey: "idcategoria"});
  categorias.hasMany(produtos, { as: "produtos", foreignKey: "idcategoria"});
  tamanhos.belongsTo(categorias, { as: "idcategoria_categoria", foreignKey: "idcategoria"});
  categorias.hasMany(tamanhos, { as: "tamanhos", foreignKey: "idcategoria"});
  pedidos.belongsTo(clientes, { as: "cliente_cliente", foreignKey: "cliente"});
  clientes.hasMany(pedidos, { as: "pedidos", foreignKey: "cliente"});
  categorias.belongsTo(lojas, { as: "idloja_loja", foreignKey: "idloja"});
  lojas.hasMany(categorias, { as: "categoria", foreignKey: "idloja"});
  produtospedidos.belongsTo(pedidos, { as: "idpedido_pedido", foreignKey: "idpedido"});
  pedidos.hasMany(produtospedidos, { as: "produtospedidos", foreignKey: "idpedido"});
  produtospedidos.belongsTo(produtos, { as: "idproduto_produto", foreignKey: "idproduto"});
  produtos.hasMany(produtospedidos, { as: "produtospedidos", foreignKey: "idproduto"});
  relacaoprodutotamanho.belongsTo(produtos, { as: "idproduto_produto", foreignKey: "idproduto"});
  produtos.hasMany(relacaoprodutotamanho, { as: "relacaoprodutotamanhos", foreignKey: "idproduto"});
  meiomeio.belongsTo(produtospedidos, { as: "idprodutocarrinho_produtospedido", foreignKey: "idprodutocarrinho"});
  produtospedidos.hasMany(meiomeio, { as: "meiomeios", foreignKey: "idprodutocarrinho"});
  produtospedidos.belongsTo(tamanhos, { as: "idtamanho_tamanho", foreignKey: "idtamanho"});
  tamanhos.hasMany(produtospedidos, { as: "produtospedidos", foreignKey: "idtamanho"});
  relacaoprodutotamanho.belongsTo(tamanhos, { as: "idtamanho_tamanho", foreignKey: "idtamanho"});
  tamanhos.hasMany(relacaoprodutotamanho, { as: "relacaoprodutotamanhos", foreignKey: "idtamanho"});
  pedidos.belongsTo(taxasentrega, { as: "taxaentrega_taxasentrega", foreignKey: "taxaentrega"});
  taxasentrega.hasMany(pedidos, { as: "pedidos", foreignKey: "taxaentrega"});

  return {
    categorias,
    clientes,
    lojas,
    meiomeio,
    pedidos,
    produtos,
    produtospedidos,
    relacaoprodutotamanho,
    tamanhos,
    taxasentrega,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
