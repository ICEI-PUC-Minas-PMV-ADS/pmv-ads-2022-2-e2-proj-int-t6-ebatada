const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meiomeio', {
    idmeiomeio: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprodutocarrinho: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'produtospedidos',
        key: 'idprodutocarrinho'
      }
    },
    segundametade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'produtos',
        key: 'idproduto'
      }
    },
    segundoterco: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'produtos',
        key: 'idproduto'
      }
    },
    terceiroterco: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'produtos',
        key: 'idproduto'
      }
    },
    segundoquarto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'produtos',
        key: 'idproduto'
      }
    },
    terceiroquarto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'produtos',
        key: 'idproduto'
      }
    },
    quartoquarto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'produtos',
        key: 'idproduto'
      }
    }
  }, {
    sequelize,
    tableName: 'meiomeio',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "meiomeio_pkey",
        unique: true,
        fields: [
          { name: "idmeiomeio" },
        ]
      },
    ]
  });
};
