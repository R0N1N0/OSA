const { createConnexion } = require("../../helpers/connexion.js");


exports.getComments = async (req, res) => {
    try {
    const {idMv} = req.query;
    if(!idMv) return res.status(400).json( {message: "Debes proporcionar el id de la maquina."} );
    
    const sql = `
    select usuario.username as nombre, usuario.imagen as imagenUsuario, comentario_usuario_mv.comentario as comentario, comentario_usuario_mv.id_comentario as id 
    from comentario_usuario_mv 
    join usuario on comentario_usuario_mv.id_usuario = usuario.id_usuario
    where id_mv = ?;
    `;

    const connexion = await createConnexion();

    let result = await connexion.query(sql, idMv);

    connexion.release();

    result = result[0];

    if(result.length > 0) {
        res.status(200).json(result);
    }
    else{
        res.status(200).json( {error: "No hay comentarios disponibles"} );
    }
    }catch(err) {
        console.log(`Error al intentar recuperar todos los comentarios de una maquina: ${err}`);
    }
}