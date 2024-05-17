const { createConnexion } = require("../../helpers/connexion.js");


exports.declineInvitation = async (req, res) => {
    try {
        const {id} = req.usuario;
        const {id_grupo} = req.body;

        if(!id_grupo) return res.json({ message: "No has proporcionado los datos necesarios." });

        const sql = "DELETE FROM invitaciones_usuario_grupo WHERE invitaciones_usuario_grupo.id_grupo = ? and invitaciones_usuario_grupo.id_usuario";
        const connexion = await createConnexion();
        const result = connexion.query(sql, [id_grupo, id]);
        connexion.release();
        if(result){
            return res.status(200).json( {message: "Invitacion eliminada correctamente."} );
        }
    }
    catch (err) {
        console.log(`Error al eliminar una invitacion: ${err}`);
    }
}