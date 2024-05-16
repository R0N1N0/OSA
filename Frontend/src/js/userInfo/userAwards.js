import { getUserRequests } from "./userRequests.js";
import helpers from "../helpers/utils.js";
import { logicAwards } from "./userLogic/awardsLogic.js";
const premiosArticle = document.querySelector(".premios");
const addAward = premiosArticle.querySelector(".btn-success");

//eventos
addAward.addEventListener("click", async () => {
    logicAwards(premiosArticle, await getAwardsNumber(), await getUserRequests.getUserAwards());
});

// function que muestra los premios que tiene disponibles un usuario
export async function printAwards(){
    const userAwards = await getUserRequests.getUserAwards();
    const premiosContainer = premiosArticle.querySelector(".premiosContainer");
    helpers.clearHTML(premiosContainer);
    const alertContainer = premiosArticle.querySelector(".alert");
    if(!userAwards.length > 0) return helpers.showStaticAlert("No tienes premios disponibles, canjea tus puntos para obtener premios", "information", alertContainer);
    userAwards.forEach(award => {
        const divAward = document.createElement("div");
        divAward.className = "relative divAward w-64 h-64 rounded flex flex-col justify-center items-center cursor-pointer";
        const img = document.createElement("img");
        img.src = award.imagen;
        img.className = "w-full h-full rounded";

        const h4 = document.createElement("h4");
        h4.textContent = award.nombre;
        h4.className = "hidden text-xl color-text color-secondary";

        const p = document.createElement("p");
        p.textContent = award.descripcion;
        p.className = "hidden text-lg color-text text-center";
        
        divAward.appendChild(h4);
        divAward.appendChild(p);
        divAward.appendChild(img);
        premiosContainer.appendChild(divAward);
    });
    selectAwards();
}


// logica para animacion de los premios
function selectAwards(){
    const divsAwards = document.querySelectorAll(".divAward");
    divsAwards.forEach(div => div.addEventListener("mouseenter", logicAward));
    divsAwards.forEach(div => div.addEventListener("mouseout", logicAward));
}
function logicAward(e){
    if(!e.target.classList.contains("divAward")) return;
    const divAward = e.target;
    const img = divAward.lastChild;
    const h4 = divAward.firstChild;
    const p = divAward.children[1];
    if(divAward.classList.contains("rotate")){
        divAward.classList.remove("rotate");
        img.classList.remove("hidden");
        h4.classList.add("hidden");
        p.classList.add("hidden");
        return;
    }
    divAward.classList.add("rotate");
    img.classList.add("hidden");
    h4.classList.remove("hidden");
    p.classList.remove("hidden");
}

async function getAwardsNumber(){
    const awards = await getUserRequests.getAwards();
    return awards.length;
}