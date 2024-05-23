const db = require("../../db/db.js");
const { createConnexion } = require("../../helpers/connexion.js");

exports.getVirtualMachines = async(req, res) => {
    try{
        // crear la connexion
        const connexion = await db.getConnection();

        // hacemos la consulta a la base de datos
        let results = await connexion.query("select id_mv, nombre, descripcion, puntos, dif, imagen, enlace from mv");

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


exports.downloadsMachine = async(req, res) => {
    try {
        const {id_mv} = req.body;
        const connexion = await createConnexion();
        let sql = "select descargas from mv where id_mv = ?";
        const [result] = await connexion.query(sql, id_mv);

        if(result.length == 0) {
            connexion.release();
            return res.status(400).json( {error: "La maquina no existe."} );
        }
        
        const downloads = result[0].descargas+1;

        sql = "UPDATE mv SET descargas = ? where id_mv = ?";
        const [result2] = await connexion.query(sql, [downloads, id_mv]);
        if(result2.changedRows > 0){
            return res.status(200).json( {message: "Descarga añadida correctamente."} );
        }
    }
    catch(error) {
        console.log(`Error añadiendo descarga a la maquina: ${error}`);
    }
}