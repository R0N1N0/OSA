const { response } = require("express");
const db = require("../../db/db");


exports.getAwards = async(req, res) => {
    try{
        const connexion = await db.getConnection();
        const sql = "SELECT * FROM premio";

        let result = await connexion.query(sql);
        connexion.release();

        result = result[0];

        if(result){
            res.status(200).json(result);
        }
    }
    catch(error){
        console.log(`error al recuperar los premios ${error}`);
    }
}