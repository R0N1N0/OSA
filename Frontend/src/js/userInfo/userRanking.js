
// Este componente imprime el ranking general 

export function printRanking(userRanking, rankingArticle){
    const table = rankingArticle.querySelector("table tbody");
    let numberRanking = 0;

    userRanking.forEach(user => {
        numberRanking++;

        const tr = document.createElement("tr");

        const thNumber = document.createElement("td");
        thNumber.className = "color-text";
        thNumber.textContent = numberRanking;

        const thImg = document.createElement("td");
        thImg.className = "relative flex justify-center";
        const img = document.createElement("img");
        img.src = user.imagen;
        img.alt = "Imagen usuario ranking";
        img.className = "w-28 h-28 rounded-xl";
        thImg.appendChild(img);

        const thName = document.createElement("td");
        thName.textContent = user.username;
        thName.className = "text-2xl color-third";

        const thPoints = document.createElement("td");
        thPoints.className = "color-text";
        thPoints.textContent = user.puntos;
        
        // añadir los elementos al html
        tr.appendChild(thNumber);
        tr.appendChild(thImg);
        tr.appendChild(thName);
        tr.appendChild(thPoints);
        table.appendChild(tr);
    });
}