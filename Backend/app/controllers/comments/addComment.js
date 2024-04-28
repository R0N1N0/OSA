const db = require("../../db/db.js");
const { createConnexion } = require("../../helpers/connexion.js");


exports.addComment = async (req, res) => {
        try{
        const { id } = req.usuario;
        const {idMv, comment} = req.body;

        const sql = "insert into comentario_usuario_mv(id_usuario, id_mv, comentario) values(?, ?, ?)";
        const connexion = await createConnexion();
        const result = await connexion.query(sql, [id, idMv, comment]);
        if(result){
            res.status(200).json({ message: "Commentario insertado correctamente." });
        }
    } 
    catch(error){
        console.log(`error al añadir un comentario: ${error}`);
    }
    }