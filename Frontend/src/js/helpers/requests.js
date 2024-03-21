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

//
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
