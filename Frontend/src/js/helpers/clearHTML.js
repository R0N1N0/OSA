

// funcion que limpia el html
export function clearHTML(container){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}