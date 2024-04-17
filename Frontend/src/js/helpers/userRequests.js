import helpers from "./utils.js";
import { fetchGetUserInfo } from "./requests.js";
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

}