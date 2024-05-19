import { printAwards } from "./userAwards.js";
import { printMachines } from "./userMachines.js";
import { printGroups } from "./userGroup.js";
import { printRanking } from "./userRanking.js";
import { getUserRequests } from "./userRequests.js";
import { printInvitations } from "./userInvitations.js";
import helpers from "../helpers/utils.js";

// variables
let userData = [];
let userMachines = [];
let userRanking = [];
let userAwards = [];
const divInfo = document.querySelector(".userInfo div.info");
const maquinasArticle = document.querySelector(".maquinas");
const rankingArticle = document.querySelector(".ranking");
const closeSessionContainer = document.querySelector(".userActions .closeSession");
const deleteAccountButton = document.querySelector(".userActions .deleteAccount");
const closesModal = document.querySelectorAll(".close");
const userInfoSection = document.querySelector(".userInfo");

//eventos 
getAllInfo();
closeSessionContainer.addEventListener("click", closeSession);
closesModal.forEach(close => {
    close.addEventListener("click", () => {
        closeModal(close);
    });
});
deleteAccountButton.addEventListener("click", deleteAccount);
// funciones

// funcion que recupera los datos del usuario
async function getAllInfo(){
    // recuperar todos los datos del usuario
    userData = await getUserRequests.getUserInfo();
    checkUserAuth(userData);
    userMachines = await getUserRequests.getUserMachines();
    userRanking = await getUserRequests.getUserRanking();
    userAwards = await getUserRequests.getUserAwards();

    
    // llamar a las funciones que imprimen los datos devueltos de la api
    printInfo(userData);
    printAwards();
    printMachines(userMachines, maquinasArticle);
    printGroups();
    printRanking(userRanking, rankingArticle);
    printInvitations();
}

// function para mostrar los datos personales del usuario por pantalla
function printInfo(userData){
    userData = userData[0];
    // Creamos la imagen de perfil
    const img = document.createElement("img");
    img.src = userData.imagen;
    img.alt = "usuario imagen de perfil";
    img.className = "rounded-full size-40";
    // Crear el h1 con el nombre del usuario
    const h1 = document.createElement("h1");
    h1.className = "mt-4 w-36 text-3xl text-center";
    h1.textContent = userData.username;
    // mostrar puntos que tiene un usuario
    const span = document.createElement("span");
    span.textContent = points();
    span.className = "mt-2 text-lg text-center color-text";

    // añadir los elementos creados al div info
    divInfo.appendChild(img);
    divInfo.appendChild(h1);
    divInfo.appendChild(span);
}

export function points(){
    const pointsMachines = userMachines.reduce((total, object) => object.puntos + total, 0);
    const pointsAwards = userAwards.length * 5;
    return pointsMachines - pointsAwards;
}
function checkUserAuth(userData) {
    if(userData) return;
    window.location.href = "../index.html";
}

function closeSession() {
    localStorage.clear();
    window.location.href = "../index.html";
}

function closeModal(e) {
    if(!e.classList.contains("close")) return;
    const modal = e.parentElement;
    helpers.showModal(modal, userInfoSection);
}

async function deleteAccount(){
    if(!confirm("Seguro que quiere eliminar su cuenta ?")) return;
    const data = await getUserRequests.deleteAccount("user/conf/deleteAccount");
    if(data.message) {
        alert(data.message);
        localStorage.clear();
        window.location.href = "../index.html";
    }
    else {
        alert("Ha ocurrido un error.");
    }
}