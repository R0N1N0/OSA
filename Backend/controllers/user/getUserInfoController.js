// importaciones 

/**
 * Función para recuperar los datos del usuario
 * @param {Object} req Objeto de la solicitud HTTP que contiene informacion del usuario(id, rol)
 * @return {Array} Array de objetos con la info del usuario
 */
exports.getUserInfo = async (req, res) => {
    // recuperamos el id y el rol de la request 
    const {id, rol} = req.usuario;

    // la query para recuperar los datos del usuario
    const sql = `select usuario.*, grupo.nombre from usuario 
    join usuario_grupo ON usuario.id_usuario = usuario_grupo.id_usuario 
    join grupo ON grupo.id_grupo = usuario_grupo.id_grupo
    where usuario.id_usuario = ?
    `;

    const connexion = await db.getConnection();
    
}
