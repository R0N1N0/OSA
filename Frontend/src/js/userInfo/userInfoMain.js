import { fetchGetUserInfo } from "../helpers/requests.js";
import { printAwards } from "./userAwards.js";
import { printMachines } from "./userMachines.js";
import { printGroups } from "./userGroup.js";
import { printRanking } from "./userRanking.js";
import { logicAwards } from "./userLogic/awardsLogic.js";
import helpers from "../helpers/utils.js";
import { createGroup } from "./userLogic/groupLogic.js";

// variables
let userData = [];
let userMachines = [];
let userGroups = [];
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
const gruposArticle = document.querySelector(".grupos");
const rankingArticle = document.querySelector(".ranking");
const addAward = premiosArticle.querySelector(".btn-success");
const addGroup = gruposArticle.querySelector(".btn-success");
const modalCreateGroup = document.querySelector(".modalCreateGroup");
const closeModal = document.querySelector(".modalShowMv .close");

//eventos 
getAllInfo();
addAward.addEventListener("click", () => {
    assignAward();
});
addGroup.addEventListener("click", () => {
    createGroup(userInfoSection, modalCreateGroup);
});
closeModal.addEventListener("click", function(){
    helpers.showModal(modalCreateGroup, userInfoSection);
});

// funciones

// funcion que recupera los datos del usuario
async function getAllInfo(){
    // recuperar todos los datos del usuario
    userData = await getInfo("user/getUser/info");
    userMachines = await getInfo("user/getUser/mv");
    userGroups = await getInfo("user/getUser/group");
    userRanking = await getInfo("user/getUser/ranking");
    userAwards = await getInfo("user/getUser/awards");
    awards = await getInfo("awards/getAwards");
    awardsNumber = awards.length;

    
    // llamar a las funciones que imprimen los datos devueltos de la api
    printInfo(userData, userMachines);
    printAwards(userAwards, premiosArticle);
    printMachines(userMachines, maquinasArticle);
    printGroups(userGroups, gruposArticle);
    printRanking(userRanking, rankingArticle);
}

// function para validar el token
export async function getInfo(route){
    try {
        if(!token){
            window.location.href = "Frontend/src/index.html";
            return;
        }
        const response = await fetchGetUserInfo(route, token);
        return response;
    } catch (error) {
        console.log(error);
    }
}

// function para mostrar los datos personales del usuario por pantalla
function printInfo(userData, userMachines){
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