const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taxasentrega', {
    idtaxa: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    valor: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'taxasentrega',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "taxasentrega_pkey",
        unique: true,
        fields: [
          { name: "idtaxa" },
        ]
      },
    ]
  });
};
