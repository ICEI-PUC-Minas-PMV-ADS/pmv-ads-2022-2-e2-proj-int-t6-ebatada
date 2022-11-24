const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tamanhos', {
    idtamanho: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(50),
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
    tableName: 'tamanhos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tamanhos_pkey",
        unique: true,
        fields: [
          { name: "idtamanho" },
        ]
      },
    ]
  });
};
