const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('relacaoprodutotamanho', {
    idproduto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'produtos',
        key: 'idproduto'
      }
    },
    idtamanho: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tamanhos',
        key: 'idtamanho'
      }
    },
    valor: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'relacaoprodutotamanho',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_ce",
        unique: true,
        fields: [
          { name: "idproduto" },
          { name: "idtamanho" },
        ]
      },
    ]
  });
};
