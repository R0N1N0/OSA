import { fetchGetUserInfo } from "../helpers/requests.js";

// variables
let userData = [];
const token = localStorage.getItem('token');

//eventos 
document.addEventListener("DOMContentLoaded", getUserInfo);

// funciones

// funcion que recupera los datos del usuario
async function getUserInfo(){
    userData = await validateToken();
}

// function para validar el token
async function validateToken(){
    try {
        if(!token){
            window.location.href = "http://127.0.0.1:5500/Frontend/index.html";
            return;
        }
        const response = await fetchGetUserInfo("getUserInfo", token);
        return response;
    } catch (error) {
        console.log(error);
    }
}