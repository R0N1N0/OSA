const db = require('../../db/db.js');


exports.addGroup = async (req, res) => {
    const groupData = req.body;
    const userData = req.usuario;
    const admin = 1;

    const connexion = await db.getConnection();
    const sql = "INSERT INTO grupo(nombre) VALUES(?)";
    const result = await connexion.query(sql, groupData.nombre);

    if(result){
        sql = "SELECT * FROM grupo where nombre = ?";
        result = await connexion.query(sql, groupData.nombre)[0];
        if(result){
            sql = "INSERT INTO usuario_grupo(id_usuario, id_grupo, admin) VALUES(?, ?, ?)";
            result = await connexion.query(sql, userData.id, result.id, admin);
            connexion.release();
            if(result){
                res.status(201).json( {message: "Grupo creado correctamente"} );
                return;
            }
        }
    }
    res.status(400);
}