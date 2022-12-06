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
    idprodutopedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'relacaoprodutotamanho',
        key: 'idtamanhorelacao'
      }
    },
    idtamanhopedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'relacaoprodutotamanho',
        key: 'idtamanhorelacao'
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
