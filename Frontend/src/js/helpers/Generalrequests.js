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
        if(response.ok){
            const responseData = await response.json();
            return responseData;
        }
    } catch (error) {
        console.log(error);
    }
}


// creando una funcion para hacer requests por get
export async function fetchGET(route) {
    try {
        const response = await fetch(baseUrl + route);
        const responseData = await response.json();
        if(responseData){
            return responseData;
        }
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
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        if(response.ok){
            return await response.json();
        }
        return false;
    } catch (error) {
        return { error: error.message };
    }
}

// function para pasar token y datos

export async function fetchPostWithDataToken(route, token, data){
    try {
        const response = await fetch(baseUrl + route, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if(response.ok){
            return await response.json();
        }
        return false;
    } catch (error) {
        return console.log(`error en fetchPostWithDataToken ${error}`);
    }
}

// function global para eliminar

export async function deleteRegistres(route, token, data) {
    try {
        console.log(data);
        const response = await fetch(baseUrl + route, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if(response.ok) {
            return await response.json();
        }
    }
    catch (error) {
        console.log(`error al borrar: ${error}`);
    }
}