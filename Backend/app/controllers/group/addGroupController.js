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
        const {id} = req.body;
        if(!id) {
            res.status(400).json( {message: "Se requiere el id de grupo para eliminar un grupo."});
        }

        let sql = "delete from grupo where id_grupo = ?";

        const connexion = await createConnexion();
        let result = await connexion.query(sql, id);

        if(result){
            sql = "delete from usuario_grupo where id_grupo = ?";
            await connexion.query(sql, id);
            connexion.release();
            res.status(200).json( {message: "Grupo eliminado correctamente"});
        }
    }
    catch(error) {
        console.log(error);
    }
}

exports.getGroupMembers = async (req, res) => {
    try{
        const {id} = req.query;
        if(!id) {
            res.status(400).json( {message: "Se necesita el id del grupo para seleccionar los miembros de un grupo."});
        }

        const sql = `SELECT usuario.*, IFNULL(SUM(mv.puntos), 0) as puntos FROM usuario 
        JOIN usuario_grupo ON usuario.id_usuario = usuario_grupo.id_usuario 
        JOIN usuario_mv ON usuario_mv.id_usuario = usuario.id_usuario 
        JOIN mv ON mv.id_mv = usuario_mv.id_mv 
        WHERE usuario_grupo.id_grupo = ?;`;
        const connexion = await createConnexion();
        let result = await connexion.query(sql, id);
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

exports.removeMember = async (req, res) => {
    try {
    const {id} = req.query;
    if(!id) res.status(400).json( {message: "Se necesita el id"});

    const sql = "delete from usuario_grupo where id_usuario = ?";

    const connexion = await createConnexion();

    const result = await connexion.query(sql, id);
    connexion.release();
    if(result){
        res.status(200).json( { message: "Miembro eliminado." } );
    }
    }
    catch(error) {
        console.log(error);
    }
}