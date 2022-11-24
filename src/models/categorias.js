const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categorias', {
    idcategoria: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idloja: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'lojas',
        key: 'idloja'
      }
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    meioameio: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'categorias',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "categorias_pkey",
        unique: true,
        fields: [
          { name: "idcategoria" },
        ]
      },
    ]
  });
};
