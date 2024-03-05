
// componente mostrar alertas
export function showAlert(mensaje, alert, container){
    const divAlert = document.createElement("div");
    divAlert.classList.add(alert, "rounded", "size-10", "p-2", "text-center", "relative", "w-full", "mt-6");
    divAlert.textContent = mensaje;
    container.appendChild(divAlert);

    setTimeout(() => {
        divAlert.classList.add("remove");
    }, 2000)
    setTimeout(() => {
        divAlert.remove();
    }, 2800)
}