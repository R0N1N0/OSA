import { fetchGET } from "../helpers/Generalrequests.js"

export class requestMv {
    static async getSpecificMv(idMv){
        return await fetchGET(`mv/specificMv?id=${idMv}`);
    }
    static async getMvs() {
        return await fetchGET("mv/getMv");
    }
    static async addcomment() {
        return await 
    }
}