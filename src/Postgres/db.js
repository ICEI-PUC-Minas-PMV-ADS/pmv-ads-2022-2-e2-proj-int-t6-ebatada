const Pool = require("pg").Pool;

const pool = new Pool({
  host: "ebatata.postgres.database.azure.com",
  user: "ebatata",
  password: "eTeste321",
  database: "eBatata",
  port: 5432,
  ssl: true,
});

module.exports = pool;
