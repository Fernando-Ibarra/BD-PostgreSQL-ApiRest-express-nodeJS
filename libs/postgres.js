const { Client } = require('pg');
const { config } = require('../config/config')
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// funcion que realiza la conección a la BD
async function getConnection() {
  const client = new Client({ connectionString: URI });
  await client.connect();
  return client;
}

module.exports = getConnection;
