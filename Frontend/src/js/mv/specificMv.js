
// todo el codigo de recuperar maquina especifica

import helpers from "../helpers/utils.js";
import { requestMv } from "./requestsMv.js";

// variables

const urlParams = new URLSearchParams(window.location.search);
const idMv = urlParams.get("idMv");
const modalShowMVArticle = document.querySelector(".specificMvSection > article");
const buttonSend = document.querySelector("button.send");
const form = document.querySelector("form");

// eventos
printMachine();
buttonSend.addEventListener("click", (e) => {
    addComment(e);
});

// funciones

async function printMachine() {
    if(!idMv) return window.location.href = "../index.html";

    const mvInfo = await requestMv.getSpecificMv(idMv);

    // funcion para limpiar el html
    helpers.clearHTML(modalShowMVArticle);

    // mostrar la maquina recuperada
    mvInfo.forEach( mv => {
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
        h1.className = "text-4xl color-third";
        h1.textContent = nombre;

        // p --> para la descripcion
        const p = document.createElement("p");
        p.className = "mt-2 text-base color-text";
        p.textContent = descripcion;

        // ul con toda la info
        const ul = document.createElement("ul");
        ul.className = "mt-6";

        const liDif = document.createElement("li");
        const strongDif = document.createElement("strong");
        strongDif.className = "font-bold";
        strongDif.textContent = "Dificultad: ";
        const spanDif = document.createElement("span");
        spanDif.textContent = dif;
        liDif.className = "color-text mt-2";
        liDif.appendChild(strongDif);
        liDif.appendChild(spanDif);


        const liPoints = document.createElement("li");
        const strongPoints = document.createElement("strong");
        strongPoints.className = "font-bold";
        strongPoints.textContent = "Puntos: ";
        const spanPoints = document.createElement("span");
        spanPoints.textContent = puntos;
        liPoints.className = "color-text mt-2";
        liPoints.appendChild(strongPoints);
        liPoints.appendChild(spanPoints);

        const liDownloads = document.createElement("li");
        const strongDownloads = document.createElement("strong");
        strongDownloads.className = "font-bold";
        strongDownloads.textContent = "Descargas: ";
        const spanDownloads = document.createElement("span");
        spanDownloads.textContent = descargas;
        liDownloads.className = "color-text mt-2";
        liDownloads.appendChild(strongDownloads);
        liDownloads.appendChild(spanDownloads);

        const buttonDownload = document.createElement("button");
        buttonDownload.className = "text-base btn-info btn mt-4 rounded color-text";
        buttonDownload.textContent = "Descargar";
        const iDownload = document.createElement("i");
        iDownload.className = "fa-solid fa-cloud-arrow-down color-text ml-2";
        buttonDownload.appendChild(iDownload)
        
        ul.appendChild(liDif);
        ul.appendChild(liPoints);
        ul.appendChild(liDownloads);
        ul.appendChild(buttonDownload);


        // añadir elementos al html
        divInfo.appendChild(h1);
        divInfo.appendChild(p);
        divInfo.appendChild(ul);
        modalShowMVArticle.appendChild(img);
        modalShowMVArticle.appendChild(divInfo);
    });
}


function addComment(e) {
    e.preventDefault();
    const parentElement = e.target.parentElement;
    if (!parentElement || !parentElement.classList.contains("send")) return;
    if(!window.confirm("Confirma para añadir un comentario.")) return;
    const inputValue = parentElement.previousElementSibling.value;
    if (!inputValue.trim()) return;

    console.log(inputValue);
}