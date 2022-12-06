const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lojas', {
    idloja: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nomefantasia: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lojas',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "lojas_pkey",
        unique: true,
        fields: [
          { name: "idloja" },
        ]
      },
    ]
  });
};
