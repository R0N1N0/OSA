
// Este fichero gestiona el apartado de grupos de userInfo

import helpers from "../helpers/utils.js";
import { deleteGroupLogic } from "./userLogic/groupLogic.js";

export function printGroups(userGroup, groupArticle){
    const alertContainer = helpers.returnAlertContainer(groupArticle);
    if(!userGroup.length > 0) return helpers.showStaticAlert("No eres participe de ningun grupo.", "information", alertContainer);
    userGroup.forEach(group => {
        // configuracion del grupo
        const divConf = document.createElement("div");
        divConf.className = "divConfGroup w-full h-10 absolute top-0";
        const ul = document.createElement("ul");
        ul.className = "h-full flex flex-row justify-end items-center accions";

        const liView = document.createElement("li");
        liView.innerHTML = `<i class="fa-solid fa-eye"></i>`;
        liView.value = group.id_grupo;
        liView.className = "cursor-pointer mr-2 view";
        ul.appendChild(liView);

        if(group.admin) {
            const liEdit = document.createElement("li");
            liEdit.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
            liEdit.value = group.id_grupo;
            liEdit.className = "cursor-pointer mr-2 edit";
            const liDelete = document.createElement("li");
            liDelete.innerHTML = `<i class="fa-solid fa-trash"></i>`;
            liDelete.value = group.id_grupo;
            liDelete.className = "cursor-pointer mr-2 delete";
            ul.appendChild(liEdit);
            ul.appendChild(liDelete);
        }
        else{
            const liOut = document.createElement("li");
            liOut.innerHTML = `<i class="fa-solid fa-right-from-bracket"></i>`;
            liOut.value = group.id_grupo;
            liOut.className = "cursor-pointer mr-2 out";
            ul.appendChild(liOut);
        }
        divConf.appendChild(ul);
        ////////

        // crear todo el div del grupo
        const divGroup = document.createElement("div");
        divGroup.className = "relative divGroup w-56 h-56 rounded flex flex-col justify-center";

        const groupName = document.createElement("h2");
        groupName.innerHTML = `<i class="fa-solid fa-user-group"></i> ${group.nombre}`;
        groupName.className = `color-text text-xl ml-4`;

        const groupNumber = document.createElement("span");
        groupNumber.innerHTML = `<i class="fa-solid fa-people-group"></i> ${group.cantidad}`;
        groupNumber.className = "color-text text-lg ml-4 mt-2";
        //añadimos los componentes al div principal
        divGroup.appendChild(divConf);
        divGroup.appendChild(groupName);
        divGroup.appendChild(groupNumber);
        groupArticle.appendChild(divGroup);
    });

    const deleteGroupBoton = document.querySelector(".grupos .accions .delete");
    if(!deleteGroupBoton) return;
    deleteGroupBoton.querySelector("i").addEventListener("click", (e) => {
        deleteGroup(e);
    });
}


function deleteGroup(e) {
    const idGroup = e.target.parentElement.value;
    if(!idGroup) return;
    deleteGroupLogic(idGroup);
}