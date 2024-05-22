const { createConnexion } = require("../../helpers/connexion.js");


exports.addComment = async (req, res) => {
        try{
        const { id } = req.usuario;
        const {idMv, comment} = req.body;

        if(!idMv || !comment) return res.send("Datos no validos.");

        const sql = "insert into comentario_usuario_mv(id_usuario, id_mv, comentario) values(?, ?, ?)";
        const connexion = await createConnexion();
        const result = await connexion.query(sql, [id, idMv, comment]);
        connexion.release();
        if(result){
            res.status(200).json({ message: "Commentario insertado correctamente." });
        }
    } 
    catch(error){
        console.log(`error al añadir un comentario: ${error}`);
    }
    }