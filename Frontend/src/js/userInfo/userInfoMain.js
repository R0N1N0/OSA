import { fetchGetUserInfo } from "../helpers/requests.js";
import { showAlert } from "../helpers/alert.js";
import { printAwards } from "./userAwards.js";
import { printMachines } from "./userMachines.js";

// variables
let userData = [];
let userMachines = [];
let userGroup = [];
let userRanking = [];
let userAwards = [];
const token = localStorage.getItem('token');
const userInfoSection = document.querySelector(".userInfo");
const divInfo = document.querySelector(".userInfo div.info");
const premiosArticle = document.querySelector(".premios");
const maquinasArticle = document.querySelector(".maquinas");
const gruposArticle = document.querySelector(".grupos");
const rankingArticle = document.querySelector(".ranking");



//eventos 
getAllInfo();

// funciones

// funcion que recupera los datos del usuario
async function getAllInfo(){
    // recuperar todos los datos del usuario
    userData = await getUserInfo("getUser/info");
    userMachines = await getUserInfo("getUser/mv");
    userGroup = await getUserInfo("getUser/group");
    userRanking = await getUserInfo("getUser/ranking");
    userAwards = await getUserInfo("getUser/awards");

    
    // llamar a las funciones que imprimen los datos devueltos de la api
    printInfo(userData);
    printAwards(userAwards, premiosArticle);
    printMachines(userMachines, maquinasArticle);
}

// function para validar el token
async function getUserInfo(route){
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
function printInfo(userData){
    userData = userData[0];
    // Creamos la imagen de perfil
    const img = document.createElement("img");
    img.src = userData.imagen;
    img.alt = "usuario imagen de perfil";
    img.className = "rounded-full w-full size-40";
    // Crear el h1 con el nombre del usuario
    const h1 = document.createElement("h1");
    h1.className = "mt-4 w-36 text-3xl text-center";
    h1.textContent = userData.username;
    // mostrar puntos que tiene un usuario
    const span = document.createElement("span");
    span.textContent = `${userData.puntos}`;
    span.className = "mt-2 text-lg text-center color-text";

    // añadir los elementos creados al div info
    divInfo.appendChild(img);
    divInfo.appendChild(h1);
    divInfo.appendChild(span);
}