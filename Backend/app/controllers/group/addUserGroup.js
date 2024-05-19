const { createConnexion } = require("../../helpers/connexion.js");

exports.addUserGroup = async (req, res) => {
  try {
    const { idGroup, username, code } = req.body;
    if (!idGroup || !username || !code) {
      return res
        .status(400)
        .send("Debe proporcionar los datos necesarios para invitar a un usuario");
    }
    const idUser = await checkUser(username, code);
    
    if (!idUser) {
      return res.status(200).json({ error: "Usuario no encontrado." });
    }
    if(await isExists(idUser, idGroup)) {
      return res.status(200).json({ error: "Error, La invitación ya existe." });
    }

    if(await isMember(idUser, idGroup)){
      return res.status(200).json({ error: "Error, este usuario ya pertenece al grupo." });
    }

    if (await sendInvitation(idGroup, idUser)) {
      return res.status(200).json({ message: "Invitación enviada correctamente." });
    }
  } catch (err) {
    console.error("Error al enviar una invitación al usuario " + err);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

async function checkUser(username, code) {
  try {
    const sql = "SELECT id_usuario FROM usuario WHERE codigo = ? AND username = ?";
    const connexion = await createConnexion();
    const [result] = await connexion.query(sql, [code, username]);
    connexion.release();
    
    if (result.length > 0) {
      return result[0].id_usuario;
    }
    return false;
  } catch (err) {
    console.error("Error al verificar usuario: ", err);
  }
}

async function sendInvitation(idGroup, idUser) {
  try {
    const sql = "INSERT INTO invitaciones_usuario_grupo (id_usuario, id_grupo) VALUES (?, ?)";
    const connexion = await createConnexion();
    const result = await connexion.query(sql, [idUser, idGroup]);
    connexion.release();
    
    if (result) {
      return true;
    }
    return false;
  } catch (err) {
    console.error("Error al enviar invitación: ", err);
  }
}

async function isExists(idUser, idGroup) {
  try {
    const sql = "select id_invitaciones_usuario_grupo from invitaciones_usuario_grupo where id_usuario = ? and id_grupo = ?";
    const connexion = await createConnexion();
    const [result] = await connexion.query(sql, [idUser, idGroup]);
    connexion.release();
    if(result.length > 0) {
      return true;
    }
    return false;
  }
  catch (err) {
    console.error("Error al enviar invitación: ", err);
  }
}

async function isMember(idUser, idGroup) {
  try {
    const sql = "select id_usuario from usuario_grupo where id_usuario = ? and id_grupo = ?";
    const connexion = await createConnexion();
    const [result] = await connexion.query(sql, [idUser, idGroup]);
    connexion.release();
    if(result.length > 0) {
      return true;
    }
    return false;
  }
  catch (err) {
    console.error("Error al enviar invitación: ", err);
  }
}