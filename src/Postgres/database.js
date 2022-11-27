const pg = require("pg");
const clientes = require("../models/clientes");

const client = new pg.Client({
  host: "ebatata.postgres.database.azure.com",
  user: "ebatata",
  password: "eTeste321",
  database: "eBatata",
  port: 5432,
  ssl: true,
});

client.connect();

module.exports = client;
