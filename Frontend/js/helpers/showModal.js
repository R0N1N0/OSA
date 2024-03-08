
// mostrar y esconder modals
export function showModal(modalShow, containerClosed){
    modalShow.classList.toggle("showModal");
    containerClosed.classList.toggle("mvBoxClose");
    document.querySelector("body").classList.toggle("overflow-hidden");
}