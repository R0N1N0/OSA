const { createConnexion } = require("../../helpers/connexion.js");
const bcrypt = require("bcrypt");
require('dotenv').config();

exports.validation = async (req, res) => {
    try {
        const {usuario, contrasena, hash_maquina} = req.body;
        if(!usuario || !contrasena || !hash_maquina) return res.status(400).json({ error: "No has proporcionado los datos necesarios." });
        
        const connexion = await createConnexion();
        const id_user = await userAuth(usuario, contrasena, connexion);
        if(!id_user) {
            connexion.release();
            return res.status(400).json( {error: "Credenciales invalidos."} );
        }

        const id_mv = await mvIsExiste(hash_maquina, connexion);
        if(!id_mv) {
            connexion.release();
            return res.status(400).json( {error: "Ha habido un error al validar la maquina, vuelva a intentarlo mas tarde"} );
        }

        if(await hasMachine(id_mv, id_user, connexion)) {
            connexion.release();
            return res.status(200).json({error: "Ya tienes esta maquina hackeada."});
        }

        if(await assignMv(id_mv, id_user, connexion)) {
            connexion.release();
            return res.status(200).json( {message: "¡Felicidades! maquina canjeada correctamente"} );
        }
        

    }
    catch(error) {
        console.log(`Error en el script de validacion: ${error}`);
    }
}

async function userAuth(usuario, contrasena, connexion) {
    const sql = "SELECT id_usuario, password FROM usuario WHERE username = ?";
    const [result] = await connexion.query(sql, usuario);
    if(!result.length > 0) return false;
    const checkPassword = await bcrypt.compare(contrasena, result[0].password);
    if(!checkPassword) return false;
    return result[0].id_usuario
}

async function mvIsExiste(hash_maquina, connexion){
    const sql = "SELECT id_mv FROM mv WHERE hash = ?";
    const [result] = await connexion.query(sql, hash_maquina);
    if(!result.length > 0) return false;
    return result[0].id_mv;
}

async function hasMachine(id_mv, id_user , connexion) {
    const sql = "SELECT id_mv FROM usuario_mv WHERE id_mv = ? and id_usuario = ?";
    const [result] = await connexion.query(sql, [id_mv, id_user]);
    if(result.length > 0) return true;
    return false;
}

async function assignMv(id_mv, id_user, connexion) {
    const sql = "INSERT INTO usuario_mv(id_usuario, id_mv) values(?, ?)";
    const result = await connexion.query(sql, [id_user, id_mv]);
    if(result) return true;
}