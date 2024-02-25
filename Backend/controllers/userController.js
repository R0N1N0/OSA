// controller userAuth

import db from "../db/db";

// USER AUTH
exports.getUserAuth = async (req, res) => {
  const { username, password } = req.body;
  try {
    const results = await getUserAuthFunction(username, password);
    if (results.length === 0) {
      console.log("usuario no encontrado");
    } else {
      console.log("usuario encontrado");
    }
  } catch(error) {
    console.log("error en el servidor");
  }
};

function getUserAuthFunction(username, password) {
  return new Promise((resolve, reject) => {
  db.query(
    `select * from usuario where username = ? and passowrd = ? `,
    [username, password],
    (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    }
  );
  })
}

// INSERT NEW USER

exports.insertUser = (res, req) => {
  const dataUser = req.body;
  db.query(
    "insert into usuario (nombre, apellido, username, password, imagen, rol, puntos) values ?",
    dataUser,
    (error, result) => {
      if (error) {
        console.log(`Error al insertar el usuario ${error}`);
      }
    }
  );
};
