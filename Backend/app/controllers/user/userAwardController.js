const db = require('../../db/db.js');

exports.assignAward = async (req, res) => {
    let connexion;
    try {
        const { id } = req.usuario;
        connexion = await db.getConnection();

        const userMachines = await getUserMachines(connexion, id);
        if (userMachines.length === 0) {
            return res.json({ error: "No tienes suficientes puntos." });
        }

        const userAwards = await getUserAwards(connexion, id);
        const awards = await getAwards(connexion);

        if (userAwards.length === awards) {
            return res.status(200).json({ messageSuccess: "Felicidades! has conseguido todos los premios disponibles." });
        }

        const puntos = points(userMachines, userAwards);
        if (puntos <= 0) {
            return res.status(200).json({ error: "No tienes suficientes puntos" });
        }

        const awardNumber = awardsLogic(userAwards, awards);

        const sql = `INSERT INTO usuario_premio(id_premio, id_usuario) VALUES(?, ?)`;

        const [result] = await connexion.query(sql, [awardNumber, id]);

        if (result.affectedRows > 0) {
            return res.status(200).json({ message: "Premio añadido correctamente" });
        } else {
            return res.status(500).json({ error: "Error al añadir el premio" });
        }
    } catch (error) {
        console.log(`Error al asignar un premio a un usuario: ${error}`);
        return res.status(500).json({ error: "Error interno del servidor" });
    } finally {
        if (connexion) {
            connexion.release();
        }
    }
};

async function getUserMachines(connexion, id_user) {
    const sql = `
        SELECT * FROM usuario_mv
        JOIN mv ON mv.id_mv = usuario_mv.id_mv
        WHERE id_usuario = ?
    `;
    const [result] = await connexion.query(sql, [id_user]);
    return result;
}

async function getUserAwards(connexion, id_user) {
    const sql = "SELECT * FROM usuario_premio WHERE id_usuario = ?";
    const [userAwards] = await connexion.query(sql, [id_user]);
    return userAwards;
}

async function getAwards(connexion) {
    const sql = "SELECT * FROM premio";
    const [awards] = await connexion.query(sql);
    return awards.length;
}

function awardsLogic(userAwards, awardsNumber) {
    let awardNumber = Math.floor(Math.random() * awardsNumber) + 1;
    let hasAward = userAwards.some(award => award.id_premio == awardNumber);

    while (hasAward) {
        awardNumber = Math.floor(Math.random() * awardsNumber) + 1;
        hasAward = userAwards.some(award => award.id_premio == awardNumber);
    }
    return awardNumber;
}

function points(userMachines, userAwards) {
    const pointsMachines = userMachines.reduce((total, object) => object.puntos + total, 0);
    const pointsAwards = userAwards.length * 5;
    return pointsMachines - pointsAwards;
}
