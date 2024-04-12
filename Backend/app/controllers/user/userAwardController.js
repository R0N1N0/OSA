const db = require('../../db/db.js');

exports.assignAward = async (req, res) => {
    try{
        const {id} = req.usuario;
        const { awardNumber } = req.body;

        const connexion = await db.getConnection();
        const sql = `INSERT INTO 
        usuario_premio(id_premio, id_usuario)
        VALUES(?, ?)`;

        const result = connexion.query(sql, [awardNumber, id]);

        connexion.release();

        if(result){
            res.status(200).json({message: "Premio añadido correctamente"});
            return;
        }

    }
    catch(error){
        console.log(`Error al asignar un premio a un usuario: ${error}`);
    }

}