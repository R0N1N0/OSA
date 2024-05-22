const { createConnexion } = require("../../helpers/connexion.js")

exports.removeMember = async (req, res) => {
    try {
      const { id } = req.usuario;
      const { id_grupo } = req.body;
      if (!id || !id_grupo) return res.status(400).json({ message: "Error, faltan datos por proporcionar." });

      const connexion = await createConnexion();

      if(!await isMember(id, id_grupo, connexion)) {
        connexion.release();
        return res.status(200).json( {error: "Error, el usuario no pertenece a este grupo"} );
      }

      const sql = "delete from usuario_grupo where id_usuario = ? and id_grupo = ?";
      const result = await connexion.query(sql, [id, id_grupo]);
      connexion.release();
      if (result) {
        return res.status(200).json({ message: "Has abandonado el grupo." });
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  async function isMember(id_user, id_grupo, connexion) {
    const sql = "select id_usuario from usuario_grupo where id_usuario = ? and id_grupo = ?";
    const [result] = await connexion.query(sql, [id_user, id_grupo]);
    console.log(result);
    if(result.length > 0 ) return true;
    return false;
  }