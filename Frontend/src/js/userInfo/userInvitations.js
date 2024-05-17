
import { getUserRequests } from "./userRequests.js";
import helpers from "../helpers/utils.js";
import { hasInvitations, declineLogic, acceptLogic } from "./userLogic/invitationsLogic.js";

const invitationsArticle = document.querySelector(".invitaciones");
const table = invitationsArticle.querySelector("table tbody");


export async function printInvitations(){
    const userInvitations = await getUserRequests.getUserInvitations();
    if(!hasInvitations(userInvitations)) return helpers.showStaticAlert("No tienes invitaciones disponibles.", "information", helpers.returnAlertContainer(invitationsArticle));

    helpers.clearHTML(table);

    userInvitations.forEach(invitation => {
        const tr = document.createElement("tr");

        const thGroupName = document.createElement("th");
        thGroupName.className = "text-2xl color-third";
        thGroupName.textContent = invitation.nombre;

        const thGroupMembers = document.createElement("th");
        thGroupMembers.className = "color-text text-xl";
        thGroupMembers.textContent = invitation.members;

        const thGroupPoints = document.createElement("th");
        thGroupPoints.className = "color-text text-xl";
        thGroupPoints.textContent = invitation.total_points;

        const thAccions = document.createElement("th");
        const accept = document.createElement("span");
        const decline = document.createElement("span");
        accept.onclick = function(e) {
            acceptInvitation(invitation.id_grupo, e);
        }
        decline.onclick = function(e) {
            declineInvitation(invitation.id_grupo, e);
        }
        accept.innerHTML = `<i class="fa-solid color-secondary text-2xl cursor-pointer fa-circle-check"></i>`
        decline.innerHTML = `<i class="fa-solid color-third text-2xl cursor-pointer fa-circle-xmark"></i>`

        thAccions.appendChild(accept);
        thAccions.appendChild(decline);
        //asignar todos los elementos creados anteriormente a la tabla
        tr.appendChild(thGroupName);
        tr.appendChild(thGroupMembers);
        tr.appendChild(thGroupPoints);
        tr.appendChild(thAccions);
        table.appendChild(tr);
    });
}


async function acceptInvitation(id_grupo, e) {
    if(!id_grupo || !e.target) return;
    const parent = e.target.closest("tr");
    const res = await acceptLogic(id_grupo)
}

async function declineInvitation(id_grupo, e) {
    if(!id_grupo || !e.target) return;
    const parent = e.target.closest("tr");
    const res = await declineLogic(id_grupo);
    if(res) return parent.remove();
}