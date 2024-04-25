
//mostrar todos las maquinas hackeadas por un usuario

export function printMachines(userMachines, maquinasArticle){
    const table = maquinasArticle.querySelector("table tbody");
    userMachines.forEach(machine => {
        const tr = document.createElement("tr");
        
        const thImg = document.createElement("td");
        thImg.className = "relative w-1/8 flex justify-center border-0";
        const img = document.createElement("img");
        img.src = machine.imagen;
        img.alt = "Imagen maquina hackeada";
        img.className = "rounded-full";
        thImg.appendChild(img);

        const thNombre = document.createElement("td");
        thNombre.className = "w-1/8";
        thNombre.textContent = machine.nombre;

        const thDesc = document.createElement("td");
        thDesc.className = "w-1/2";
        thDesc.textContent = machine.descripcion;

        const thPoints = document.createElement("td");
        thPoints.className = "w-1/12";
        thPoints.textContent = machine.puntos;

        const thDif = document.createElement("td");
        thDif.className = "w-1/12";
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
