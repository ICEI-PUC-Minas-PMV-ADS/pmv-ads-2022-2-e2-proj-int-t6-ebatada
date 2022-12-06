const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidos', {
    idpedido: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    numeropersonalizado: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    abertoem: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    fechadoem: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tipopedido: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'clientes',
        key: 'id'
      }
    },
    taxaentrega: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'taxasentrega',
        key: 'idtaxa'
      }
    },
    observacoes: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pedidos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pedidos_pkey",
        unique: true,
        fields: [
          { name: "idpedido" },
        ]
      },
    ]
  });
};
