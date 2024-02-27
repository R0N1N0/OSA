const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'bassou',
  database: 'db_proyect'
});

module.exports = pool;