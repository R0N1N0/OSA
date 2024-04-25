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

export async function viewMembersLogic(idGroup, modalView, userInfoSection){
    helpers.showModal(modalView, userInfoSection);
    const members = await getUserRequests.getGroupMembers(`group/getGroupMembers?id=${idGroup}`);
    printMembers(members, modalView);
}

function printMembers(members, modalView){
    const table = modalView.querySelector("table tbody");
    let number = 0;
    members.forEach(member => {
        number++;
        const tr = document.createElement("tr");
        const tdNumero = document.createElement("td");
        tdNumero.textContent = number;

        if(member.admin == "1"){
            console.log(typeof(member.admin))
            member.username = `${member.username} (admin)`;
        }
        const tdName = document.createElement("td");
        tdName.textContent = member.username;

        const tdPuntos = document.createElement("td");
        tdPuntos.textContent = member.puntos


        tr.appendChild(tdNumero);
        tr.appendChild(tdName);
        tr.appendChild(tdPuntos);
        table.appendChild(tr);
    });
}