const db = require("../../db/db");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const juntar = require("../../helpers/trim.js");
require('dotenv').config();


// USER AUTH
exports.getUserAuth = async (req, res) => {
  const {username, password} = req.body;
  try {
    // crear la connexion 
    const connection = await db.getConnection();

    // hacer la consulta
    let [[result]] = await connection.query("select id_usuario, rol, password from usuario where username = ?", [username]);
    
    //liberar la connexion
    connection.release();


    // ahora hacer todo el tema de la validacion 
    if (!result) {
      console.log("yass");
      return res.status(401).json( {error: "Nombre de usuario o contraseña incorrectos"} );
    } 

      const checkPassword = await bcrypt.compare(password, result.password);
      if(!checkPassword) return res.status(401).json( {error: "Nombre de usuario o contraseña incorrectos"} );

      const payload = {
        id: result.id_usuario,
        rol: result.rol
      }

      const token = jwt.sign(payload, juntar(process.env.TOKEN_SECRET1,process.env.TOKEN_SECRET2), { expiresIn: '1h' });
      res.status(200).json( { token: token } );

  } catch(error) {
    res.send(`Error en el servidor ${error}`);
  }
};
