import { showAlert } from "../helpers/alert.js";
import { fetchPOST } from "../helpers/requests.js";

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
        showAlert("Todos los campos son obligatorios", "error", form);
        return;
    }

    const userData = {
        username: username.value,
        password: password.value
    }

    // ejecutamos esta funcion que llama a la api para hacer la auth
    login(userData);
}

async function login(userData){
    try {
        const data = await fetchPOST("login", userData);
        if(data.token){
            saveToken(data.token);
        }
        else{
            showAlert("Usuario o contraseña incorrectos", "error", form);
        }
    } catch (error) {
        console.error('Error al hacer la consulta', error);
        throw error;
    }
}

// guardar token y hacer la redireccion
function saveToken(token){
    localStorage.setItem("token", token);
    window.location.href = "http://127.0.0.1:5500/Frontend/src/index.html";
}