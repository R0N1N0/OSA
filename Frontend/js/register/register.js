import { showAlert } from "../helpers/alert.js";
import { fetchPOSTData } from "../helpers/requests.js";

// variables
const loginArticle = document.querySelector(".loginArticle");
const form = document.querySelector("#formLogin");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const Fprofile = document.querySelector("#FProfile");

// eventos
form.addEventListener("submit", verifyInputs);

// funciones
async function verifyInputs(e){
    e.preventDefault();
    // comprobar si los campos están vacíos
    if(username.value.trim() === "" || password.value.trim() === "" || Fprofile.value === ""){
        showAlert("Todos los campos son obligatorios", "error", form);
        return;
    }
    const formData = new FormData();
    formData.append('username', username.value);
    formData.append('password', password.value);
    formData.append('image', Fprofile.files[0]);
    createUser(formData);
}


// funcion para crear el usuario

async function createUser(formData){
    try{
        const data = await fetchPOSTData("createUser", formData);
        console.log(data);
        if(data.message){
            showAlert("Usuario creado correctamente", "success", form);
            form.reset();
        }
    }
    catch(error){
        console.error("Error al crear el usuario:", error.message);
        showAlert("Error al crear el usuario", "error", form);
    }
}
