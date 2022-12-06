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

  produtos.belongsToMany(tamanhos, { as: 'idtamanhorelacao_tamanhos', through: relacaoprodutotamanho, foreignKey: "idprodutorelacao", otherKey: "idtamanhorelacao" });
  tamanhos.belongsToMany(produtos, { as: 'idprodutorelacao_produtos', through: relacaoprodutotamanho, foreignKey: "idtamanhorelacao", otherKey: "idprodutorelacao" });
  produtos.belongsTo(categorias, { as: "idcategoria_categoria", foreignKey: "idcategoria" });
  categorias.hasMany(produtos, { as: "produtos", foreignKey: "idcategoria" });
  tamanhos.belongsTo(categorias, { as: "idcategoria_categoria", foreignKey: "idcategoria" });
  categorias.hasMany(tamanhos, { as: "tamanhos", foreignKey: "idcategoria" });
  pedidos.belongsTo(clientes, { as: "cliente_cliente", foreignKey: "cliente" });
  clientes.hasMany(pedidos, { as: "pedidos", foreignKey: "cliente" });
  categorias.belongsTo(lojas, { as: "idloja_loja", foreignKey: "idloja" });
  lojas.hasMany(categorias, { as: "categoria", foreignKey: "idloja" });
  produtospedidos.belongsTo(pedidos, { as: "idpedido_pedido", foreignKey: "idpedido" });
  pedidos.hasMany(produtospedidos, { as: "produtospedidos", foreignKey: "idpedido" });
  meiomeio.belongsTo(produtos, { as: "quartoquarto_produto", foreignKey: "quartoquarto" });
  produtos.hasMany(meiomeio, { as: "meiomeios", foreignKey: "quartoquarto" });
  meiomeio.belongsTo(produtos, { as: "segundametade_produto", foreignKey: "segundametade" });
  produtos.hasMany(meiomeio, { as: "segundametade_meiomeios", foreignKey: "segundametade" });
  meiomeio.belongsTo(produtos, { as: "segundoquarto_produto", foreignKey: "segundoquarto" });
  produtos.hasMany(meiomeio, { as: "segundoquarto_meiomeios", foreignKey: "segundoquarto" });
  meiomeio.belongsTo(produtos, { as: "segundoterco_produto", foreignKey: "segundoterco" });
  produtos.hasMany(meiomeio, { as: "segundoterco_meiomeios", foreignKey: "segundoterco" });
  meiomeio.belongsTo(produtos, { as: "terceiroquarto_produto", foreignKey: "terceiroquarto" });
  produtos.hasMany(meiomeio, { as: "terceiroquarto_meiomeios", foreignKey: "terceiroquarto" });
  meiomeio.belongsTo(produtos, { as: "terceiroterco_produto", foreignKey: "terceiroterco" });
  produtos.hasMany(meiomeio, { as: "terceiroterco_meiomeios", foreignKey: "terceiroterco" });
  relacaoprodutotamanho.belongsTo(produtos, { as: "idprodutorelacao_produto", foreignKey: "idprodutorelacao" });
  produtos.hasMany(relacaoprodutotamanho, { as: "relacaoprodutotamanhos", foreignKey: "idprodutorelacao" });
  meiomeio.belongsTo(produtospedidos, { as: "idprodutocarrinho_produtospedido", foreignKey: "idprodutocarrinho" });
  produtospedidos.hasMany(meiomeio, { as: "meiomeios", foreignKey: "idprodutocarrinho" });
  produtospedidos.belongsTo(relacaoprodutotamanho, { as: "idprodutopedido_relacaoprodutotamanho", foreignKey: "idprodutopedido" });
  relacaoprodutotamanho.hasMany(produtospedidos, { as: "produtospedidos", foreignKey: "idprodutopedido" });
  produtospedidos.belongsTo(relacaoprodutotamanho, { as: "idtamanhopedido_relacaoprodutotamanho", foreignKey: "idtamanhopedido" });
  relacaoprodutotamanho.hasMany(produtospedidos, { as: "idtamanhopedido_produtospedidos", foreignKey: "idtamanhopedido" });
  relacaoprodutotamanho.belongsTo(tamanhos, { as: "idtamanhorelacao_tamanho", foreignKey: "idtamanhorelacao" });
  tamanhos.hasMany(relacaoprodutotamanho, { as: "relacaoprodutotamanhos", foreignKey: "idtamanhorelacao" });
  pedidos.belongsTo(taxasentrega, { as: "taxaentrega_taxasentrega", foreignKey: "taxaentrega" });
  taxasentrega.hasMany(pedidos, { as: "pedidos", foreignKey: "taxaentrega" });

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
