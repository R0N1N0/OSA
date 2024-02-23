import mysql from 'mysql';

const dbconfig = {
    host: "localhost",
    user: "root",
    password: "bassou",
    database: "db_proyect"
}

const connection = mysql.createConnection(dbconfig);

module.exports = connection;