require('dotenv').config();

const mysql = require('mysql2/promise');

const DB_PASSWORD = `${process.env.DB_PASSWORD1.trim()}${process.env.DB_PASSWORD2.trim()}`;

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

module.exports = pool;