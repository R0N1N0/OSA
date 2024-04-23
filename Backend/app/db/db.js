require('dotenv').config();

const mysql = require('mysql2/promise');
const decrypt = require("../helpers/decrypt.js");
const readSecretFromFile = require("./decrypt.js");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: decrypt(readSecretFromFile("/etc/nodejs-conf/DB_PASSWORD")),
  database: process.env.DB_DATABASE
});

module.exports = pool;
