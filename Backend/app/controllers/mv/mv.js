const db = require("../../db/db.js");
const { createConnexion } = require("../../helpers/connexion.js");

exports.getVirtualMachines = async(req, res) => {
    try{
        // crear la connexion
        const connexion = await db.getConnection();

        // hacemos la consulta a la base de datos
        let results = await connexion.query("select * from mv");

        // cerramos la connexion
        connexion.release();

        results = results[0];

        if(results.length === 0){
            res.json( {message: "No hay maquinas disponibles"} );
        }
        else{
            res.json(results);
        }
    }
    catch(error){
        console.log(`Error en el servidor ${error}`);
    }
}

exports.getSpecificMv = async(req, res) => {
    try {
        const { id } = req.query;
        if(!id) return res.status(400).json({ message: "No has proporcionado el id de la maquina." });
        
        const sql = "select * from mv where id_mv = ?";
        const connexion = await createConnexion();
        let result = await connexion.query(sql, id);
        connexion.release();

        result = result[0];
        if(result){
            return res.status(200).json(result);
        }
        res.status(400).json( {error: "Maquina no encontrada."} );
    }
    catch(error){
        console.log(`El error al recuperar una maquina especifica. ${error}`);
    }
}
