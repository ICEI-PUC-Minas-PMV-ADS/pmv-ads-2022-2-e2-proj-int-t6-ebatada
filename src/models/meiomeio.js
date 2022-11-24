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
      allowNull: true
    },
    segundoterco: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    terceiroterco: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    segundoquarto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    terceiroquarto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quartoquarto: {
      type: DataTypes.INTEGER,
      allowNull: true
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
