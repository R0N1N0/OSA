import { fetchPOST } from "../helpers/Generalrequests.js";
import helpers from "../helpers/utils.js";

// variables
const loginArticle = document.querySelector(".loginArticle");
const form = document.querySelector("#formLogin");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
let token = null;

// eventos
form.addEventListener("submit", verifyInputs);

// funciones
async function verifyInputs(e){
    e.preventDefault();
    // comprobar si los campos estan vacios
    if(username.value.trim() === "" || password.value.trim() === ""){
        helpers.showAlert("Todos los campos son obligatorios", "error", form);
        return;
    }

    const userData = {
        username: username.value.trim(),
        password: password.value.trim()
    }

    // ejecutamos esta funcion que llama a la api para hacer la auth
    login(userData);
}

async function login(userData){
    try {
        const data = await fetchPOST("user/login", userData);
        if(data.token){
            saveToken(data.token);
        }
        else{
            helpers.showAlert("Usuario o contraseña incorrectos", "error", form);
        }
    } catch (error) {
        console.error('Error al hacer la consulta', error);
        throw error;
    }
}

// guardar token y hacer la redireccion
function saveToken(token){
    localStorage.setItem("token", token);
    window.location.href = "../index.html";
}