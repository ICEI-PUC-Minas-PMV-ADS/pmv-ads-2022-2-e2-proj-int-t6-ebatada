const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos', {
    idproduto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idcategoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'categorias',
        key: 'idcategoria'
      }
    }
  }, {
    sequelize,
    tableName: 'produtos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "produtos_pkey",
        unique: true,
        fields: [
          { name: "idproduto" },
        ]
      },
    ]
  });
};
