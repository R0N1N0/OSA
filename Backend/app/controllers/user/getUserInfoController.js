// importaciones 
const db = require('../../db/db.js');

/**
 * Función para recuperar los datos del usuario
 * @param {Object} req Objeto de la solicitud HTTP que contiene informacion del usuario(id, rol)
 * @return {Array} Array de objetos con la info del usuario
 */
exports.getUserInfo = async (req, res) => {
    try{
        // recuperamos el id y el rol de la request 
        const {id, rol} = req.usuario;

        // la query para recuperar los datos del usuario
        const sql = 
        `select * from usuario where id_usuario = ?`;
        const connexion = await db.getConnection();    
        let result = await connexion.query(sql, id);

        if(result){
            result = result[0];
            res.status(200).json(result);
        }
        else{
            res.status(501).json({ error: "Ha ido mal la consulta" });
        }
    }
    catch(err){
        console.log(err);
    }
}

exports.getUserMV = async (req, res) => {
    try{
        // recuperamos el id y el rol de la request 
        const {id, rol} = req.usuario;

        // la query para recuperar los datos del usuario
        const sql = 
        `select * from usuario_mv where id_usuario = ?`;
        const connexion = await db.getConnection();    
        let result = await connexion.query(sql, id);

        if(result){
            result = result[0];
            res.status(200).json(result);
        }
        else{
            res.status(501).json({ error: "Ha ido mal la consulta" });
        }
    }
    catch(err){
        console.log(err);
    }
}


exports.getUserGroup = async (req, res) => {
    try{
        // recuperamos el id y el rol de la request 
        const {id, rol} = req.usuario;

        // la query para recuperar los datos del usuario
        const sql = 
        `select * from usuario_grupo where id_usuario = ?`;
        const connexion = await db.getConnection();    
        let result = await connexion.query(sql, id);

        if(result){
            result = result[0];
            res.status(200).json(result);
        }
        else{
            res.status(501).json({ error: "Ha ido mal la consulta" });
        }
    }
    catch(err){
        console.log(err);
    }
}

exports.getUserRanking = async (req, res) => {
    try{
        // recuperamos el id y el rol de la request 
        const {id, rol} = req.usuario;

        // la query para recuperar los datos del usuario
        const sql = `select * from usuario order by usuario.puntos`;
        const connexion = await db.getConnection();    
        let result = await connexion.query(sql, id);

        if(result){
            result = result[0];
            res.status(200).json(result);
        }
        else{
            res.status(501).json({ error: "Ha ido mal la consulta" });
        }
    }
    catch(err){
        console.log(err);
    }
}