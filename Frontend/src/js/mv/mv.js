import { filter } from "./filtersMV.js";
import helpers from "../helpers/utils.js";
import { requestMv } from "./requestsMv.js";
// variables // ---------------
const mvBox = document.querySelector(".mvbox");
const searchInput = document.querySelector("form .search");
let mvDisp = [];
//eventos
getVirtualMachines();
//filtrar por nombre de la maquina
searchInput.addEventListener("input", e => filter(e, mvDisp));

////////////

// funciones // -------------

// mostrar las maquinas
export async function printMvs(mvDisp){

    helpers.clearHTML(mvBox);
    mvDisp.forEach(result => {
        // contenedor
        const container = document.createElement("div");
        container.classList.add("relative", "box", "ml-6", "rounded", "w-80", "h-96", "mt-14", "flex", "items-center", "justify-center", "flex-wrap");
        // imagen maquina
        const img = document.createElement("img");
        img.src = result.imagen;
        img.alt = `Imagen de la maquina ${result.nombre}`;
        img.className = "w-full rounded";
        //div con la info de la maquina
        const containerInfo = document.createElement("div");
        containerInfo.classList.add("flex", "mvinfo", "flex-row", "flex-wrap", "items-center", "justify-between", "w-full", "rounded-b");
        // p con la dificultad
        const pInfo = document.createElement("p");
        pInfo.classList.add("p-dif", "ml-4", "w-full");
        pInfo.textContent = result.dif;
        // h2 con el nombre de la maquina
        const h2Info = document.createElement("h2");
        h2Info.textContent = result.nombre;
        h2Info.classList.add("titlemv", "text-2xl", "ml-4", "mb-4");
        // button para mas info
        const buttonInfo = document.createElement("button");
        buttonInfo.onclick = function(){
            getEspecificMV(result.id_mv);
        };
        buttonInfo.classList.add("text-base", "btn-info", "rounded", "mr-4", "mb-4", "btn");
        buttonInfo.innerHTML = `
        Más info <i class="fa-solid fa-chevron-right"></i>
        `;

        // añadir elementos al articulo principal
        container.appendChild(img);
        containerInfo.appendChild(pInfo);
        containerInfo.appendChild(h2Info);
        containerInfo.appendChild(buttonInfo);
        container.appendChild(containerInfo);  
        mvBox.appendChild(container);
    });    
}

function getEspecificMV(idMv){
    if(!idMv) return;
    window.location.href = `./specificMv.html?idMv=${idMv}`;
}

async function getVirtualMachines() {
    mvDisp = await requestMv.getMvs();
    if(!mvDisp.length > 0) return helpers.showStaticAlert("No hay maquinas disponibles.", "information", mvBox);
    printMvs(mvDisp);
}
