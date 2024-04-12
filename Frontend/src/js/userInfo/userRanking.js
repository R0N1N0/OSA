
// Este componente imprime el ranking general 

export function printRanking(userRanking, rankingArticle){
    const table = rankingArticle.querySelector("table");
    let numberRanking = 0;

    userRanking.forEach(user => {
        numberRanking++;

        const tr = document.createElement("tr");
        tr.className = "h-36 rounded flex justify-center gap-8 items-center flex-wrap pb-4 mb-4";

        const thNumber = document.createElement("th");
        thNumber.className = "w-1/12 color-text";
        thNumber.textContent = numberRanking;

        const thImg = document.createElement("th");
        thImg.className = "relative w-1/6";
        const img = document.createElement("img");
        img.src = user.imagen;
        img.alt = "Imagen usuario ranking";
        img.className = "rounded-full h-28";
        thImg.appendChild(img);

        const thName = document.createElement("th");
        thName.textContent = user.username;
        thName.className = "text-2xl w-4/12 color-text";

        const thPoints = document.createElement("th");
        thPoints.className = "w-1/6 color-text color-third";
        thPoints.textContent = user.puntos;
        
        // añadir los elementos al html
        tr.appendChild(thNumber);
        tr.appendChild(thImg);
        tr.appendChild(thName);
        tr.appendChild(thPoints);
        table.appendChild(tr);
    });
}