import { showAlert } from "../helpers/alert.js";

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
    // comprobar si los campos estan vacios
    if(username.value.trim() === "" || password.value.trim() === "" || Fprofile.value === ""){
        showAlert("Todos los campos son obligatorios", "error", form);
        return;
    }

    // creamos un objeto con los datos recuperados
    const userData = {
        username: username.value,
        password: password.value,
        Fprofile: Fprofile.value
    }

    // Llamamos a la function que crea el usuario
    createUser(userData);
}


// funcion para crear el usuario

async function createUser(userData){
    try{
        const response = await fetch("http://localhost:3000/createUser", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
    }
    catch(error){
        console.log("Error al crear el usuario");
    }
}