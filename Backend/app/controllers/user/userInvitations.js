const { createConnexion } = require("../../helpers/connexion.js");

exports.getUserInvitations = async (req, res) => {
  try {
    const { id } = req.usuario;
    const sql = query();
    const connexion = await createConnexion();
    const [result] = await connexion.query(sql, id);
    connexion.release();

    if (result) {
      res.status(200).json(result);
    }
  } catch (err) {
    console.log(`Error recuperando las invitaciones del usuario: ${err}`);
  }
};

function query() {
  return `
    
  SELECT
  grupo.id_grupo as id_grupo,
  grupo.nombre AS nombre,
  COUNT(DISTINCT usuario_grupo.id_usuario) AS members,
  IFNULL(SUM(DISTINCT puntos_totales.puntos), 0) AS total_points
FROM
  invitaciones_usuario_grupo
JOIN
  grupo ON grupo.id_grupo = invitaciones_usuario_grupo.id_grupo
LEFT JOIN
  usuario_grupo ON grupo.id_grupo = usuario_grupo.id_grupo
LEFT JOIN
  usuario ON usuario.id_usuario = usuario_grupo.id_usuario
LEFT JOIN
  (
      SELECT
          usuario_mv.id_usuario,
          SUM(mv.puntos) AS puntos
      FROM
          usuario_mv
      JOIN
          mv ON mv.id_mv = usuario_mv.id_mv
      GROUP BY
          usuario_mv.id_usuario
  ) AS puntos_totales ON usuario.id_usuario = puntos_totales.id_usuario
WHERE
  invitaciones_usuario_grupo.id_usuario = ?
GROUP BY
  grupo.id_grupo, grupo.nombre
    `;
}
