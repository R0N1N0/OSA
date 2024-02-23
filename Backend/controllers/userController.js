// controller userAuth

import db from "../db/db";

// USER AUTH
exports.getUserAuth = (req, res) => {
  const { username, password } = req.body;
  db.query(
    `select * from usuario where username = ? and passowrd = ? `,
    [username, password],
    (error, results) => {
      if (error) {
        console.log(`Error en la consulta ${error}`);
      }
      if (results.length === 0) {
      } else {
        
      }
    }
  );
};

// INSERT NEW USER

exports.insertUser = (res, req) => {
  const dataUser = req.body;
  db.query(
    "insert into usuario (nombre, apellido, username, password, imagen, rol, puntos) values ?",
    dataUser,
    (error, result) => {
        if(error){
            console.log(`Error al insertar el usuario ${error}`);
        }
    }
  );
};
