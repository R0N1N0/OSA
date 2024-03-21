
// mostrar y esconder modals
// le pasamos la clase del modal y el elemento a esconder
export function showModal(modalShow, containerClosed){
    modalShow.classList.toggle("showModal");
    containerClosed.classList.toggle("mvBoxClose");
    document.querySelector("body").classList.toggle("overflow-hidden");
    document.querySelector("nav").classList.toggle("backgroundMenu");
}