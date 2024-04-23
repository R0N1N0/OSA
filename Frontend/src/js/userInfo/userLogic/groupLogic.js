import helpers from "../../helpers/utils.js";
import { getUserRequests } from "../../helpers/userRequests.js";

export async function createGroupLogic(e, modalCreateGroup){
    e.preventDefault();
    const inputValue = modalCreateGroup.querySelector("input[type=text]").value;
    if(inputValue.trim() == "") return helpers.showAlert("El nombre de grupo es obigatorio", "error", modalCreateGroup.querySelector("form"));
    const res = getUserRequests.addGroup({nombre: inputValue.trim()});
    if(res){
        modalCreateGroup.querySelector("form").reset();
        return res;
    }
}

export async function deleteGroupLogic(idGroup){
    if(!idGroup) return;
    const res = getUserRequests.deleteGroup({id: idGroup});
    if(res){
        return true;
    }
    return false;
}

export async function viewMembersLogic(e, modalView){

}