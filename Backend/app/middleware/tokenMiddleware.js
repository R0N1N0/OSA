const jwt = require('jsonwebtoken');
const juntar = require("../helpers/trim.js");
require("dotenv").config();
/**
 * Función que valida un token de autenticación.
 * @param {Object} req Objeto de la solicitud HTTP que contiene el token de autenticación.
 * @return {Object} Objeto con la información del usuario asociado con el token.
 */
function validateToken(req, res, next) {

    let token = req.headers.authorization;
    try {
        if (!token) {
            return res.status(401).json({ error: "Token no proporcionado" });
        }
        // Verificar el token 
        jwt.verify(token.split(' ')[1], process.env.TOKEN_SECRET, (error, payload) => {
            if (error) {
                return res.status(401).json({ error: 'Token inválido' });
            }
            req.usuario = payload;
            next();
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = validateToken;
