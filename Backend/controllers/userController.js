const db = require("../db/db");
const jwt = require('jsonwebtoken');
require('dotenv').config();


// USER AUTH
exports.getUserAuth = async (req, res) => {
  const {username, password} = req.body;
  try {
    // crear la connexion 
    const connection = await db.getConnection();

    // hacer la consulta
    const results = await connection.query("select * from usuario where username = ? and password = ?", [username, password]);
    
    //liberar la connexion
    connection.release();

    // ahora hacer todo el tema de la validacion 
    if (results.length === 0) {
      
    } else {

      // Crear el token si el usuario existe

      const payload = {
        id: results[0].id_usuario,
        rol: results[0].rol
      }

      // devolver token al cliente
      const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1h' });
      res.json({ token });

    }
  } catch(error) {
    res.send("error en userAuth" + error);
  }
};
