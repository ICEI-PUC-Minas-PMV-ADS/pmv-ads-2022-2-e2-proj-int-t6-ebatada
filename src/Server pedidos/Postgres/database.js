const pg = require('pg');

const client = new pg.Client({
  host: 'localhost',
  port: 5432,
  database: 'eBatata',
  user: 'postgres',
  password: 'ebatata',
})

client.connect();

module.exports = client;