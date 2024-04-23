require('dotenv').config();

const mysql = require('mysql2/promise');
const decrypt = require("../helpers/decrypt.js");

async function getPassword() {
  try {
    const encryptedPassword = await decrypt.readSecretFromFile("/etc/nodejs-conf/DB_PASSWORD");
    const password = await decrypt(encryptedPassword);
    return password;
  } catch (error) {
    console.error('Error reading or decrypting password:', error);
    throw error;
  }
}

const DB_PASSWORD = await getPassword();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

module.exports = pool;
