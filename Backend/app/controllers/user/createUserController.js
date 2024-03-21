const db = require("../../db/db");
require("dotenv").config();
const path = require("path");
const bcrypt = require("bcrypt");
const uploadImages = require('../../helpers/cloudinary.js');

exports.createUser = async (req, res) => {
  try {
    const image = req.files.image;
    let { username, password } = req.body;
    const pathImg = await uploadImages(image.path);

    password = await bcrypt.hash(password, 10);

    const userData = [username, password, pathImg, "usuario"];

    const connexion = await db.getConnection();
    // La query
    const query = "insert into usuario(username, password, imagen, rol) values(?, ?, ?, ?)";
    const result = await connexion.query(query, userData)
    if(result){
      res.json( { message: `Usuario insertado correctamente` } );
    }
    else{
      res.json( {error: `Error al crear el usuario`} );
    }
      connexion.release();
  } catch(error) {
    console.log(error);
  }
};
