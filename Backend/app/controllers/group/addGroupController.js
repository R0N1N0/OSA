const db = require('../../db/db.js');
const { createConnexion } = require("../../helpers/connexion.js");


exports.addGroup = async (req, res) => {
    try {
        const groupData = req.body;
    const userData = req.usuario;
    const admin = 1;

    const connexion = await db.getConnection();
    let sql = "INSERT INTO grupo(nombre) VALUES(?)";
    let result = await connexion.query(sql, groupData.nombre);

    if(result){
        sql = "SELECT * FROM grupo where nombre = ?";
        result = await connexion.query(sql, groupData.nombre);
        result = result[0];
        if(result){
            sql = "INSERT INTO usuario_grupo(id_usuario, id_grupo, admin) VALUES(?, ?, ?)";
            result = await connexion.query(sql, [userData.id, result[0].id_grupo, admin]);
            connexion.release();
            if(result){
                res.status(201).json( {message: "Grupo creado correctamente"} );
                return;
            }
        }
    }
    res.status(400);
    }
    catch(error) {
        console.log(error);
    }
}

exports.deleteGroup = async (req, res) => {
    try {
        const groupData = req.body;

        const sql = "delete from group where id_grupo = ?";

        const connexion = await createConnexion();
        const result = await connexion.query(sql, groupData.id);

        connexion.release();

        if(result){
            res.status(200).json( {message: "Grupo eliminado correctamente"})
        }
    }
    catch(error) {
        console.log(error);
    }
}

exports.getGroupMembers = async (req, res) => {
    try{
        const id = req.query.id;

        const sql = "";
        const connexion = await createConnexion();
        const result = await connexion.query(sql, id);
        connexion.release();
        result = result[0];
        if(result){
            res.status(200).json(result);
        }
    }
    catch(error) {
        console.log(error);
    }
}