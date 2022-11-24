const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "clientes",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      telefoneprimario: {
        type: DataTypes.STRING(14),
        allowNull: true,
      },
      telefonesecundario: {
        type: DataTypes.STRING(14),
        allowNull: true,
      },
      rua: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      numero: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      bairro: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      complemento: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      referencia: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "clientes",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "clientes_pkey",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
