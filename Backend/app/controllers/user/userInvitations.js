const { createConnexion } = require("../../helpers/connexion.js");

exports.getUserInvitations = async (req, res) => {
    try {
        const {id} = req.usuario;
        const sql = "select * from invitaciones_usuario_grupo where id_usuario = ?";
        const connexion = await createConnexion();
        const [result] = await connexion.query(sql, id);
        connexion.release();

        if (result){
            res.status(200).json(result);
        }
        
    }
    catch (err) {
        console.log(`Error recuperando las invitaciones del usuario: ${err}`);
    }
}