import { filter } from "./filtersMV.js";
import { fetchGET } from "../helpers/Generalrequests.js";
import helpers from "../helpers/utils.js";

// variables // ---------------
const mvBox = document.querySelector(".mvbox");
const modalShowMV = document.querySelector(".modalShowMv");
const modalShowMVArticle = document.querySelector(".modalShowMv > article");
const searchInput = document.querySelector("form .search");
let mvDisp = [];

//eventos
document.addEventListener("DOMContentLoaded", getMv);
//filtrar por nombre de la maquina
searchInput.addEventListener("input", e => filter(e, mvDisp));
//cerrar modal
modalShowMV.querySelector(".close").addEventListener("click", function(){
    helpers.showModal(modalShowMV, mvBox);
});

////////////

// funciones // -------------

// mostrar las maquinas
export function showMV(results){
    helpers.clearHTML(mvBox);
    results.forEach(result => {
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
        console.log(mvBox);
    });    
}

// funcion para mostrar info sobre una maquina especifica
function getEspecificMV(id){
    // funcion para limpiar el html
    helpers.clearHTML(modalShowMVArticle);
    // filtramos para recuperar los datos de esa maquina en especifico
    let mvEspecific = mvDisp.filter(mv => mv.id_mv === id);

    // mostrar la maquina recuperada por pantalla en el modal
    mvEspecific.forEach( mv => {
        const { nombre, descripcion, puntos, dif, imagen, descargas } = mv;

        // la imagen
        const img = document.createElement("img");
        img.src = imagen;
        img.classList.add("size-96", "rounded");
        // div con toda la info
        const divInfo = document.createElement("div");
        divInfo.classList.add("w-96", "ml-6", "p-6", "pt-0", "flex", "flex-col");

        // h1 --> titulo de la maquina
        const h1 = document.createElement("h1");
        h1.classList.add("text-3xl");
        h1.textContent = nombre;

        // p --> para la descripcion
        const p = document.createElement("p");
        p.classList.add("mt-2", "text-base");
        p.textContent = descripcion;

        // ul con toda la info
        const ul = document.createElement("ul");
        ul.classList.add("mt-6");
        ul.innerHTML = `
        <li class="mt-2"> <strong class="font-bold"> Dificultad: </strong> ${dif} </li>
        <li class="mt-2"> <strong class="font-bold"> Puntos: </strong> ${puntos} </li>
        <li class="mt-2"> <strong class="font-bold"> Descargas: </strong> ${descargas} </li>
        <button class="text-base btn-info btn mt-4 rounded"><i class="fa-solid fa-cloud-arrow-down"></i> Descargar </button>
        `;

        // añadir elementos al html
        divInfo.appendChild(h1);
        divInfo.appendChild(p);
        divInfo.appendChild(ul);
        modalShowMVArticle.appendChild(img);
        modalShowMVArticle.appendChild(divInfo);
    });
    helpers.showModal(modalShowMV, mvBox);
}

/////////////////

// llamadas a la api //

// recuperar todas las maquinas disponibles
async function getMv(){
    try{
        mvDisp = await fetchGET("mv/getMv");
            if(mvDisp.length > 0){
                showMV(mvDisp);
            }
            else{
                showAlert("No hay maquinas disponibles", "error", mvBox);
            }
    }
    catch(error)  {

    }
}