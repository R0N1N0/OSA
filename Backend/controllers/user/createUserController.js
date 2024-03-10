const db = require("../../db/db");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const multer = require("multer");
const path = require("path");

// configuracion del multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../../Frontend/uploads/img'));
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  
const upload = multer({ storage: storage });

// creamos la funcion que crea un nuevo usuario

exports.createUser = upload.single('FProfile'), async (req, res) => {
  try {
    // crear la connexion
    const connection = await db.getConnection();

    // creamos la query para insertar un nuevo usuario
    const query = "insert into usuario(username, password, imagen) values (?)";
    // lanzamos la query y le pasamos los datos
    console.log(userData);    
  }
  catch(error){

  }
}