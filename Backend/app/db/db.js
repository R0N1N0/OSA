require('dotenv').config();

const mysql = require('mysql2/promise');
const {readSecretFromFile, base64decode} = require("../helpers/decrypt.js");

async function getPassword() {
  try {
    const encryptedPassword = await decrypt.readSecretFromFile("/etc/nodejs-conf/DB_PASSWORD");
    const password = await base64decode(encryptedPassword);
    return password;
  } catch (error) {
    console.error('Error reading or decrypting password:', error);
    throw error;
  }
}


async function getpool(){
  return mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: await getPassword(),
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
  });
}

module.exports = getpool;


