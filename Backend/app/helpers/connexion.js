const db = require("../db/db.js");

exports.createConnexion = async () => {
    return await db.getConnection();
}