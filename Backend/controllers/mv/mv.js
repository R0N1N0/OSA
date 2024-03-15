const db = require("../../db/db.js");


exports.getVirtualMachine = async(req, res) => {
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


