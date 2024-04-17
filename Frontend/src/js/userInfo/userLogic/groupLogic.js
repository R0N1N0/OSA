import { fetchPostWithDataToken, deleteRegistres } from "../../helpers/requests.js";
import helpers from "../../helpers/utils.js";

export async function createGroupLogic(e, modalCreateGroup){
    e.preventDefault();
    const inputValue = modalCreateGroup.querySelector("input[type=text]").value;
    if(inputValue.trim() == "") return helpers.showAlert("El nombre de grupo es obigatorio", "error", modalCreateGroup.querySelector("form"));

    const res = await fetchPostWithDataToken("group/addgroup", helpers.getToken(), {nombre: inputValue.trim()});
    if(res){
        modalCreateGroup.querySelector("form").reset();
        return res;
    }
}

export async function deleteGroupLogic(idGroup){
    if(!idGroup) return;
    const res = await deleteRegistres("group/deleteGroup", helpers.getToken(), {id: idGroup});
    if(res){
        return true;
    }
    return false;
}