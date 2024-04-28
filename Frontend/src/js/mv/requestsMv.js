import { fetchGET, fetchPostWithDataToken } from "../helpers/Generalrequests.js"
import helpers from "../helpers/utils.js";

export class requestMv {
    static async getSpecificMv(idMv){
        return await fetchGET(`mv/specificMv?id=${idMv}`);
    }
    static async getMvs() {
        return await fetchGET("mv/getMv");
    }
    static async addcomment(idMv, comment) {
        return fetchPostWithDataToken("comments/addComment", helpers.getToken(), {idMv, comment});
    }
}