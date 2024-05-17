const juntar = require("../helpers/trim.js");
require('dotenv').config();

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: juntar(process.env.DB_PASSWORD1, process.env.DB_PASSWORD2),
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

module.exports = pool;
