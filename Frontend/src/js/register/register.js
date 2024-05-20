import { fetchPOSTData } from "../helpers/Generalrequests.js";
import helpers from "../helpers/utils.js";

// variables
const loginArticle = document.querySelector(".loginArticle");
const form = document.querySelector("#formLogin");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const Fprofile = document.querySelector("#FProfile");
const submitButton = document.querySelector("input[type=submit]");

// eventos
form.addEventListener("submit", verifyInputs);

// funciones
async function verifyInputs(e){
    e.preventDefault();
    // comprobar si los campos están vacíos
    if(username.value.trim() === "" || password.value.trim() === "" || Fprofile.value === ""){
        helpers.showAlert("Todos los campos son obligatorios", "error", form);
        return;
    }
    if (!Fprofile.files[0].name.split(".").pop().toLowerCase().match(/^(png|jpg)$/)) {
        helpers.showAlert("La extension de la imagen no es valida", "error", form);
        return;
    }
    if((Fprofile.files[0].size / (1024*1024) > 2)){
        helpers.showAlert("La imagen debe pesar menos de 2MB", "error", form);
        return;
    }
    const formData = new FormData();
    formData.append('username', username.value.trim());
    formData.append('password', password.value.trim());
    formData.append('image', Fprofile.files[0]);
    createUser(formData);
}


// funcion para crear el usuario

async function createUser(formData){
    try{
        showLoader();
        helpers.disabled(submitButton);
        const response = await fetchPOSTData("user/createUser", formData);
        helpers.unDisabled(submitButton);
        showLoader();
        if(response.message){
            helpers.showAlert("Usuario creado correctamente", "success", form);
            form.reset();
            setTimeout(() => {
                window.location.href = "./login.html";
            }, 1000);
            return;
        }
        helpers.showAlert(response.error, "error", form);
    }
    catch(error){
        console.error("Error al crear el usuario:", error.message);
        helpers.showAlert("Error al crear el usuario", "error", form);
    }
}

function showLoader() {
    const loader = document.querySelector(".spinner");
    const img = document.querySelector("img.logo");
    if(loader.classList.contains("hidden")){
        loader.classList.remove("hidden");
        img.classList.add("hidden");
    }
    else {
        loader.classList.add("hidden");
        img.classList.remove("hidden");
    }
}