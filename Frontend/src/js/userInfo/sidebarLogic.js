
// aqui esta el codigo de la logica del sidebar 

//variables
const articles = document.querySelectorAll(".userInfo > article");
const tab_controllers = document.querySelectorAll("section nav li");

//eventos
tab_controllers.forEach(tab => tab.addEventListener("click", show));

// funciones
function show(e){
    if(!e.target.classList.contains("tab-controller")) return;
    articles.forEach(article => article.classList.add("hidden"));
    tab_controllers.forEach(tab => tab.classList.remove("active"));
    let articleName = e.target.getAttribute("name");
    articleName = document.querySelector(`.${articleName}`);
    articleName.classList.remove("hidden");
    e.target.classList.add("active");
}