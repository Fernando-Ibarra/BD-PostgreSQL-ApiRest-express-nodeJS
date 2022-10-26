const { Client } = require('pg');

// funcion que realiza la conección a la BD
async function getConnection() {
  const client = new Client({
    host:'localhost',
    port:5432,
    user:'fernando',
    password:'admin123',
    database:'my_store'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
