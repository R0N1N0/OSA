const { createConnexion } = require("../../helpers/connexion.js");


exports.acceptInvitation = async (req, res) => {
    try {
        const {id} = req.usuario;
        const {id_grupo} = req.body;

        if(!id_grupo) return res.json({ message: "No has proporcionado los datos necesarios." });
        
        const connexion = await createConnexion();

        if(!await isExists(id, id_grupo, connexion)) {
            connexion.release();
            return res.json( { error: "La invitacion no existe."} );
        }
        await deleteInvitation(id, id_grupo, connexion);
        await addUser(id, id_grupo, connexion);
        connexion.release();
        return res.status(200).json( {message: "Invitacion aceptada correctamente."} );
    }
    catch(err) {
        console.log("Error aceptando una invitacion: " + err);
    }
}

async function isExists(id_user, id_grupo, connexion) {
    const sql = "select id_usuario from invitaciones_usuario_grupo where id_usuario = ? and id_grupo = ?";
    const [result] = await connexion.query(sql, [id_user, id_grupo]);
    if(result.length > 0){
        return true;
    }
    return false;
}

async function deleteInvitation(id_user, id_grupo, connexion) {
    const sql = "DELETE FROM invitaciones_usuario_grupo WHERE id_grupo = ? and id_usuario = ?";
    await connexion.query(sql, [id_grupo, id_user]);
}

async function addUser(id_user, id_grupo, connexion) {
    const sql = "INSERT INTO usuario_grupo(id_usuario, id_grupo, admin) VALUES(?, ?, 0)";
    await connexion.query(sql, [id_user, id_grupo]);
}