const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtospedidos', {
    idprodutocarrinho: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pedidos',
        key: 'idpedido'
      }
    },
    idproduto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'produtos',
        key: 'idproduto'
      }
    },
    idtamanho: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tamanhos',
        key: 'idtamanho'
      }
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'produtospedidos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "produtospedidos_pkey",
        unique: true,
        fields: [
          { name: "idprodutocarrinho" },
        ]
      },
    ]
  });
};
