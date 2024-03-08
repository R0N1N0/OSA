const db = require("../../db/db");
const jwt = require('jsonwebtoken');
require('dotenv').config();


// USER AUTH
exports.getUserAuth = async (req, res) => {
  const {username, password} = req.body;
  try {
    // crear la connexion 
    const connection = await db.getConnection();

    // hacer la consulta
    let results = await connection.query("select id_usuario, rol from usuario where username = ? and password = ?", [username, password]);
    
    //liberar la connexion
    connection.release();

    // coger solo el array de resultados
    results = results[0];

    // ahora hacer todo el tema de la validacion 
    if (results.length === 0) {
      res.json( {message: "Nombre de usuario o contraseña incorrectos"} );
    } else {
      // Crear el token si el usuario existe

      const payload = {
        id: results[0].id_usuario,
        rol: results[0].rol
      }
      console.log(payload);

      // devolver token al cliente
      const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1h' });
      res.json({ token });
    }
  } catch(error) {
    res.send(`Error en el servidor ${error}`);
  }
};
