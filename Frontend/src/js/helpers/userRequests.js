import helpers from "./utils.js";
import { deleteRegistres, fetchGetUserInfo, fetchPostWithDataToken } from "./Generalrequests.js";
async function getInfo(route){
    try {
        const token = helpers.getToken();
        if(!token){
            window.location.href = "../../../index.html";
            return;
        }
        const response = await fetchGetUserInfo(route, token);
        return response;
    } catch (error) {
        console.log(error);
    }
}


export class getUserRequests {

    static async getUserInfo(){
        return await getInfo("user/getUser/info");
    }
    static async getUserMachines(){
        return await getInfo("user/getUser/mv");
    }
    static async getUserGroups(){
        return await getInfo("user/getUser/group");
    }
    static async getUserRanking(){
        return await getInfo("user/getUser/ranking");
    }
    static async getUserAwards(){
        return await getInfo("user/getUser/awards");
    }
    static async getAwards(){
        return await getInfo("awards/getAwards");
    }
    static async addGroup(nombre) {
        return await fetchPostWithDataToken("group/addgroup", helpers.getToken(), nombre);
    }
    static async deleteGroup(id) {
        return await deleteRegistres("group/deleteGroup", helpers.getToken(), id);
    }
    static async assignAward(awardNumber) {
        return await fetchPostWithDataToken("user/award/assignAward", helpers.getToken(), awardNumber);
    }
    static async getGroupMembers(route) {
        return await fetchGetUserInfo(route, helpers.getToken());
    }

}