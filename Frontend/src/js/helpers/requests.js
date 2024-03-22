import { showAlert } from "./alert.js";
const baseUrl = "http://localhost:3000/";

export async function fetchPOST(route, data) {
    try {
        const response = await fetch(baseUrl + route, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        return { error: error.message };
    }
}


// creando una funcion para hacer requests por get
export async function fetchGET(route) {
    try {
        const response = await fetch(baseUrl + route);
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        return { error: error.message };
    }
}

//creando una funcion para hacer requests con formdata
export async function fetchPOSTData(route, data) {
    try {
        const response = await fetch(baseUrl + route, {
            method: "POST",
            body: data
        });
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        return { error: error.message };
    }
}

// Funcion para recuperar informacion del usuario
export async function fetchGetUserInfo(route, token){
    try {
        const response = await fetch(baseUrl + route, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        if(response.ok){
            const responseData = await response.json();
            return responseData;
        }
        window.location.href = "http://127.0.0.1:5500/Frontend/index.html";
    } catch (error) {
        return { error: error.message };
    }
}
