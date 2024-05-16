const db = require("../../db/db");
require("dotenv").config();
const path = require("path");
const bcrypt = require("bcrypt");
const uploadImages = require('../../helpers/cloudinary.js');
const { createConnexion } = require("../../helpers/connexion.js");

exports.createUser = async (req, res) => {
  try {
    const image = req.files.image;
    let { username, password } = req.body;

    // comprobar si el usuario ya existe
    if (!username || !password) return res.status(400).json( { message: "El nombre y contrseña de usuario son obligatorios." } );
    
    const connexion = await createConnexion();
    if(await checkUser(connexion, username)) {
      return res.status(401).json({ error: "Error!!!! El nombre de usuario ya esta utilizado." });
    }

    const pathImg = await uploadImages(image.path);

    password = await convertPassword(password);

    const userData = [username, password, getCode(username), pathImg, "usuario"];
    // La query
    query = "insert into usuario(username, password, codigo, imagen, rol) values(?, ?, ?, ?, ?)";
    const result = await connexion.query(query, userData);
    connexion.release();
    if(result){
      res.json( { message: `Usuario insertado correctamente` } );
    }
  } catch(error) {
    console.log(error);
  }
};


async function checkUser(connexion, username) {
    const sql = "select id_usuario from usuario where username = ?";
    let res = await connexion.query(sql, username);
    res = res[0];
    if(res && res.length > 0) return true;
    return false;
}
async function convertPassword(password){ 
  return await bcrypt.hash(password, 10);
}

function getCode(username){
  username = username.slice(0, 2);
  const d = new Date();
  username += d.getTime().toString().slice(-5);
  return username;
}