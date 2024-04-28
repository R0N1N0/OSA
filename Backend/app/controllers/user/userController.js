const db = require("../../db/db");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();


// USER AUTH
exports.getUserAuth = async (req, res) => {
  const {username, password} = req.body;
  try {
    // crear la connexion 
    const connection = await db.getConnection();

    // hacer la consulta
    let results = await connection.query("select id_usuario, rol, password from usuario where username = ?", [username]);
    
    //liberar la connexion
    connection.release();

    // coger solo el array de resultados
    results = results[0];

    // comprobar la contraseña del usuario
    const checkPassword = await bcrypt.compare(password, results[0].password);

    // ahora hacer todo el tema de la validacion 
    if (results.length === 0 || !checkPassword) {
      res.json( {message: "Nombre de usuario o contraseña incorrectos"} );
    } else {
      // Crear el token si el usuario existe
      const payload = {
        id: results[0].id_usuario,
        rol: results[0].rol
      }
      // devolver token al cliente
      const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token });
    }
  } catch(error) {
    res.send(`Error en el servidor ${error}`);
  }
};
