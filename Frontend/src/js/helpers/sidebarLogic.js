
// aqui esta el codigo de la logica del sidebar 

//variables
const articles = document.querySelectorAll(".controller > article");
const tab_controllers = document.querySelectorAll("section nav li");
let url = window.location.href;
const urlParams = new URLSearchParams(window.location.search);

//eventos
tab_controllers.forEach(tab => tab.addEventListener("click", show));
tabs_logic();


// funciones
function show(e){
    if(!e.target.classList.contains("tab-controller")) return;
    articles.forEach(article => article.classList.add("hidden"));
    tab_controllers.forEach(tab => tab.classList.remove("active"));
    let articleName = e.target.getAttribute("name");
    setParameter(articleName);
    articleName = document.querySelector(`.${articleName}`);
    articleName.classList.remove("hidden");
    e.target.classList.add("active");
}

function tabs_logic() {
    if(!urlParams.has("tab")) return;
    const tab = urlParams.get("tab");
    const tab_controllers = document.querySelectorAll(".tab-controller");
    tab_controllers.forEach(tab_controller => {
        if(tab_controller.getAttribute("name") == tab){
            tab_controller.click();
        };
    })
}
function setParameter(paramValue) {
    if(urlParams.has("tab")){
        urlParams.set("tab", paramValue);
    }
    else{
        urlParams.append("tab", paramValue);
    }
    let updatedUrl = window.location.origin + window.location.pathname + '?' + urlParams.toString();
    window.history.pushState({ path: updatedUrl }, '', updatedUrl);
}

