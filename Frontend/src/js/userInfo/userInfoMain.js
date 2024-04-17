import { printAwards } from "./userAwards.js";
import { printMachines } from "./userMachines.js";
import { printGroups } from "./userGroup.js";
import { printRanking } from "./userRanking.js";
import { logicAwards } from "./userLogic/awardsLogic.js";
import helpers from "../helpers/utils.js";
import { getUserRequests } from "../helpers/userRequests.js";

// variables
let userData = [];
let userMachines = [];
let userRanking = [];
let userAwards = [];
let awards = [];
let awardsNumber = 0;
const token = localStorage.getItem('token');
const userInfoSection = document.querySelector(".userInfo");
const divInfo = document.querySelector(".userInfo div.info");
const premiosArticle = document.querySelector(".premios");
const premiosContainer = premiosArticle.querySelector(".premiosContainer");
const maquinasArticle = document.querySelector(".maquinas");
const rankingArticle = document.querySelector(".ranking");
const addAward = premiosArticle.querySelector(".btn-success");
const modalCreateGroup = document.querySelector(".modalCreateGroup");
const closeModal = document.querySelector(".modalShowMv .close");

//eventos 
getAllInfo();
addAward.addEventListener("click", () => {
    assignAward();
});
closeModal.addEventListener("click", function(){
    helpers.showModal(modalCreateGroup, userInfoSection);
});
// funciones

// funcion que recupera los datos del usuario
async function getAllInfo(){
    // recuperar todos los datos del usuario
    userData = await getUserRequests.getUserInfo();
    userMachines = await getUserRequests.getUserMachines();
    userRanking = await getUserRequests.getUserRanking();
    userAwards = await getUserRequests.getUserAwards();
    awards = await getUserRequests.getAwards();
    awardsNumber = awards.length;

    
    // llamar a las funciones que imprimen los datos devueltos de la api
    printInfo(userData);
    printAwards(userAwards, premiosArticle);
    printMachines(userMachines, maquinasArticle);
    printGroups();
    printRanking(userRanking, rankingArticle);
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

async function assignAward(){
    const result = await logicAwards(premiosArticle, awardsNumber, awards, userAwards, token);
    setTimeout( async function() {
        if(result === true){
            userAwards = await getInfo("user/getUser/awards");
            divInfo.querySelector("span").textContent = points();
            helpers.clearHTML(premiosContainer);
            printAwards(userAwards, premiosArticle);
        }
    }, 2900);
}