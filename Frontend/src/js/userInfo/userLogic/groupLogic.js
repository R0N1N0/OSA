
import helpers from "../../helpers/utils.js";
export function createGroup(userInfoSection, modal, modalCreateGroup){
    //variables
    const submitButton = modalCreateGroup.querySelector("input[type=submit]");
    console.log(submitButton);
    //eventos
    helpers.showModal(modal, userInfoSection);
    submitButton.addEventListener("click", (e) => {
        addGroup(e, modalCreateGroup);
    });
}

function addGroup(e, modalCreateGroup){
    e.preventDefault();
    //variables
    const inputName = modalCreateGroup.querySelector("input[type=text]").value;
    if(inputName.trim() == ''){
        helpers.showAlert("El nombre de grupo es obligatorio", "error", modalCreateGroup.querySelector("form"));
        return;
    }

    
}