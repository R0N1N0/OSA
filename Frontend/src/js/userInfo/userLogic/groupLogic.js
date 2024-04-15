
import helpers from "../../helpers/utils.js";
import { fetchPostWithDataToken, deleteRegistres } from "../../helpers/requests.js";
export function createGroup(userInfoSection, modalCreateGroup){
    //variables
    const submitButton = modalCreateGroup.querySelector("input[type=submit]");
    console.log(submitButton);
    //eventos
    helpers.showModal(modalCreateGroup, userInfoSection);
    submitButton.addEventListener("click", (e) => {
        addGroup(e, modalCreateGroup, userInfoSection);
    });
}

async function addGroup(e, modalCreateGroup, userInfoSection){
    e.preventDefault();
    //variables
    const inputName = modalCreateGroup.querySelector("input[type=text]").value;
    if(inputName.trim() == ''){
        helpers.showAlert("El nombre de grupo es obligatorio", "error", modalCreateGroup.querySelector("form"));
        return;
    }
    const token = helpers.getToken();
    const res = await fetchPostWithDataToken("group/addGroup", token, {nombre: inputName.trim()});
    if(res){
        helpers.showAlert(res.message, "success", modalCreateGroup.querySelector("form"));
        setTimeout(() => {
            helpers.showModal(modalCreateGroup, userInfoSection);
            modalCreateGroup.querySelector('form').reset();
            return true;
          }, 2000);
    }
    else{
        return helpers.showAlert("Error al crear el grupo", "error", modalCreateGroup.querySelector("form"));
    }
}

export async function deleteGroupLogic(idGroup) {
    const res = await deleteRegistres("group/deleteGroup", helpers.getToken(), {id: idGroup});
    if(res){
        console.log(res.message);
    }
}