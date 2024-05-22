const { createConnexion } = require("../../helpers/connexion.js");

exports.deleteAccount = async (req, res) => {
    try {
        const {id} = req.usuario;
        const connexion = await createConnexion();
        const result = await deleteRegistres(id, connexion);
        connexion.release();
        if(result) {
            return res.status(200).json( { message: "Usuario eliminado correctamente." } );
        }
        else {
            return res.status(400).json( {error: "Error al eliminar un usuario."} );
        }
    }
    catch(err) {
        console.log(`Error eliminando un usuario: ${err}`);
    }
}


async function deleteRegistres(id, connexion) {
    let sql = "DELETE FROM usuario WHERE id_usuario = ?";
    if(await connexion.query(sql, id)){
        sql = "DELETE FROM comentario_usuario_mv WHERE id_usuario = ?";
        if(await connexion.query(sql, id)){
            sql = "DELETE FROM usuario_grupo WHERE id_usuario = ?";
            if(await connexion.query(sql, id)){
                sql = "DELETE FROM invitaciones_usuario_grupo WHERE id_usuario = ?";
                if(await connexion.query(sql, id)){
                    sql = "DELETE FROM usuario_premio WHERE id_usuario = ?";
                    if(await connexion.query(sql, id)){
                        sql = "DELETE FROM usuario_mv WHERE id_usuario = ?";
                        if(await connexion.query(sql, id)) {
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
}