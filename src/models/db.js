const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  database: "eBatata",
  username: "ebatata",
  password: "eTeste321",
  host: "ebatata2.postgres.database.azure.com",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

sequelize.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.log("Unable to connect to the database:", error);
  });

module.exports = sequelize;
