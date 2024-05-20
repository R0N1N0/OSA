
class helpers {

    static returnAlertContainer(container){
        return container.querySelector(".alert");
    }
    static showStaticAlert(mensaje, alert, container){
        const divAlert = document.createElement("div");
        divAlert.classList.add(alert, "rounded", "size-10", "p-2", "text-center", "relative", "w-full", "mt-8");
        divAlert.textContent = mensaje;
        container.appendChild(divAlert);
    }
    static showModal(modalShow, containerClosed){
        modalShow.classList.toggle("showModal");
        containerClosed.classList.toggle("mvBoxClose");
        document.querySelector("body").classList.toggle("overflow-hidden");
        document.querySelector("nav").classList.toggle("backgroundMenu");
    }
    static deleteContainer(container){
        if(!container) return;
        container.remove();
    }
    static clearHTML(container){
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
    }
    static showAlert(mensaje, alert, container){
        const divAlert = document.createElement("div");
        divAlert.classList.add(alert, "rounded", "size-10", "p-2", "text-center", "relative", "w-full", "mt-8");
        divAlert.textContent = mensaje;
        container.appendChild(divAlert);
    
        setTimeout(() => {
            divAlert.classList.add("remove");
        }, 2000);
        setTimeout(() => {
            divAlert.remove();
        }, 2800);
    }
    static getToken(){
        return localStorage.getItem('token');
    }
    static disabled(element){
        element.disabled = true;
    }
    static unDisabled(element){
        element.disabled = false;
    }
}

export default helpers;