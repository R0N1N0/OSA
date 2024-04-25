
// Este componente imprime el ranking general 

export function printRanking(userRanking, rankingArticle){
    const table = rankingArticle.querySelector("table tbody");
    let numberRanking = 0;

    userRanking.forEach(user => {
        numberRanking++;

        const tr = document.createElement("tr");

        const thNumber = document.createElement("td");
        thNumber.className = "w-1/12 color-text";
        thNumber.textContent = numberRanking;

        const thImg = document.createElement("td");
        thImg.className = "relative w-1/6";
        const img = document.createElement("img");
        img.src = user.imagen;
        img.alt = "Imagen usuario ranking";
        img.className = "w-full h-full h-28";
        thImg.appendChild(img);

        const thName = document.createElement("td");
        thName.textContent = user.username;
        thName.className = "text-2xl w-4/12 color-text";

        const thPoints = document.createElement("td");
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