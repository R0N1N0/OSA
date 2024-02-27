const db = require("../db/db");
const jwt = require('jsonwebtoken');


// USER AUTH
exports.getUserAuth = async (req, res) => {
  const {username, password} = req.body;
  console.log(req.body);
  try {
    // crear la connexion 
    const connection = await db.getConnection();

    // hacer la consulta
    const results = await connection.query("select * from usuario where username = ? and password = ?", [username, password]);
    
    //liberar la connexion
    connection.release();

    // ahora hacer todo el tema de la validacion 
    if (results.length === 0) {
      res.json( {results} );
    } else {
      res.json( {results} );
    }
  } catch(error) {
    res.send("error en el catch" + error);
  }
};
