import { fetchGET, fetchPostWithDataToken, usingPut } from "../helpers/Generalrequests.js"
import helpers from "../helpers/utils.js";

export class requestMv {
    static async getSpecificMv(idMv){
        return await fetchGET(`mv/specificMv?id=${idMv}`);
    }
    static async getMvs() {
        return await fetchGET("mv/getMv");
    }
    static async addcomment(idMv, comment) {
        return await fetchPostWithDataToken("comments/addComment", helpers.getToken(), {idMv, comment});
    }
    static async getComments(idMv) {
        return await fetchGET(`comments/getComments?idMv=${idMv}`);
    }
    static async updateDownloads(data) {
        return await usingPut("mv/specificMv", data);
    }
}