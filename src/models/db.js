const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  database: "eBatata",
  username: "ebatata",
  password: "eTeste321",
  host: "ebatata.postgres.database.azure.com",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

<<<<<<< HEAD
sequelize
  .authenticate()
=======
sequelize.authenticate()
>>>>>>> parent of 7d09a53 (Merge pull request #85 from ICEI-PUC-Minas-PMV-ADS/pedidos-feature)
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.log("Unable to connect to the database:", error);
  });

module.exports = sequelize;
