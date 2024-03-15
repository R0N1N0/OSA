const baseUrl = "http://localhost:3000/";

export async function fetchPOST(route, data) {
    try {
        const response = await fetch(baseUrl + route, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        });
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        return { error: error.message };
    }
}


export async function fetchGET(route) {
    try {
        const response = await fetch(baseUrl + route);
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        return { error: error.message };
    }
}