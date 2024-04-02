
//mostrar todos las maquinas hackeadas por un usuario

export function printMachines(userMachines, maquinasArticle){
    const table = maquinasArticle.querySelector("table");
    userMachines.forEach(machine => {
        const tr = document.createElement("tr");
        tr.className = "rounded flex justify-center gap-12 items-center flex-wrap pb-4 mb-4";
        
        const thImg = document.createElement("th");
        thImg.className = "relative";
        const img = document.createElement("img");
        img.src = machine.imagen;
        img.alt = "Imagen maquina hackeada";
        img.className = "rounded-full";
        thImg.appendChild(img);

        const thNombre = document.createElement("th");
        thNombre.textContent = machine.nombre;

        const thDesc = document.createElement("th");
        thDesc.textContent = machine.descripcion;

        const thPoints = document.createElement("th");
        thPoints.textContent = machine.puntos;

        const thDif = document.createElement("th");
        thDif.textContent = machine.dif;

        //asignar todos los elementos creados anteriormente a la tabla
        tr.appendChild(thImg);
        tr.appendChild(thNombre);
        tr.appendChild(thDesc);
        tr.appendChild(thPoints);
        tr.appendChild(thDif);
        table.appendChild(tr);
    });
}