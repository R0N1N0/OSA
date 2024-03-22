import { fetchGetUserInfo } from "../helpers/requests.js";
import { showAlert } from "../helpers/alert.js";

// variables
let userData = [];
let userMachines = [];
let userGroup = [];
let userRanking = [];
const token = localStorage.getItem('token');
const userInfoSection = document.querySelector(".userInfo");
const divInfo = document.querySelector(".userInfo div.info");

//eventos 
document.addEventListener("DOMContentLoaded", getAllInfo);

// funciones

// funcion que recupera los datos del usuario
async function getAllInfo(){
    // recuperar datos del usuario
    userData = await getUserInfo("getUser/info");
    userMachines = await getUserInfo("getUser/mv");
    userGroup = await getUserInfo("getUser/group");
    userRanking = await getUserInfo("getUser/ranking");

    console.log(userData);
    console.log(userMachines);
    console.log(userGroup);
    console.log(userRanking);
    printInfo(userData);
}

// function para validar el token
async function getUserInfo(route){
    try {
        if(!token){
            location.href = "http://127.0.0.1:5500/Frontend/src/index.html";
            return;
        }
        const response = await fetchGetUserInfo(route, token);
        return response;
    } catch (error) {
        console.log(error);
    }
}

// function para mostrar los datos por pantalla
function printInfo(userData){
    userData = userData[0];
    // Creamos la imagen de perfil
    const img = document.createElement("img");
    img.src = userData.imagen;
    img.alt = "usuario imagen de perfil";
    img.className = "rounded-full w-full size-40";
    // Crear el h1 con el nombre del usuario
    const h1 = document.createElement("h1");
    h1.className = "mt-4 w-36 text-lg text-center";
    h1.textContent = userData.username;
    console.log(h1);

    // añadir los elementos creados al div info
    divInfo.appendChild(img);
    divInfo.appendChild(h1);
}