import helpers from "../../helpers/utils.js";
import { getUserRequests } from "../userRequests.js";

// variables

const modals = document.querySelectorAll(".modalShowMv");
const closes = document.querySelectorAll(".close");
const userInfoSection = document.querySelector(".userInfo");

//eventos
closes.forEach(function(close, index) {
    close.addEventListener("click", function() {
        helpers.showModal(modals[index], userInfoSection);
    });
});

// funciones

// variables

const modals = document.querySelectorAll(".modalShowMv");
const closes = document.querySelectorAll(".close");
const userInfoSection = document.querySelector(".userInfo");

//eventos
closes.forEach(function(close, index) {
    close.addEventListener("click", function() {
        helpers.showModal(modals[index], userInfoSection);
    });
});

// funciones

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
    helpers.clearHTML(table);
    let number = 0;
    members.forEach(member => {
        number++;
        const tr = document.createElement("tr");
        const tdNumero = document.createElement("td");
        tdNumero.textContent = number;

        const tdName = document.createElement("td");
        tdName.textContent = member.username;
        tdName.className = "color-third text-2xl";

        const tdPuntos = document.createElement("td");
        tdPuntos.textContent = member.puntos


        tr.appendChild(tdNumero);
        tr.appendChild(tdName);
        tr.appendChild(tdPuntos);
        table.appendChild(tr);
    });
}


export async function addUserGroupLogic(idGroup, modalAddgroup, userInfoSection){
    helpers.showModal(modalAddgroup, userInfoSection);
    const form = modalAddgroup.querySelector("form");
    form.addEventListener("submit", async function(e) {
        sendInvitation(e, idGroup)
    });   
}

async function sendInvitation(e, idGroup) {
    e.preventDefault();
    const form = e.target;
    const username = form.querySelectorAll("input")[0].value.trim();
    const code = form.querySelectorAll("input")[1].value.trim();
    if(username === "" || code === "") return helpers.showAlert("Los dos campos son obligatorios.", "error", form);
    const res = await getUserRequests.sendInvitation({username, code, idGroup}, "group/addUserGroup");
    
    form.reset();
    if(res.error) return helpers.showAlert(res.error, "error", form);
    else if(res.message) return helpers.showAlert(res.message, "success", form);
}
