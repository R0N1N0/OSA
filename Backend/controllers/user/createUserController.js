const db = require("../../db/db");
require("dotenv").config();
const path = require("path");
const uploadImages = require('../../helpers/cloudinary.js');

exports.createUser = async (req, res) => {
  try {
    const image = req.files.image;
    const { username, password } = req.body;
    const pathImg = await uploadImages(image.path);
   
    const userData = [username, password, pathImg];

    const connexion = await db.getConnection();
    // La query
    const query = "insert into usuario(username, password, imagen) values(?, ?, ?)";
    const result = await connexion.query(query, userData)
    if(result){
      res.json( { message: `Usuario insertado correctamente` } );
    }
      connexion.release();
  } catch(error) {
    console.log(error);
  }
};
