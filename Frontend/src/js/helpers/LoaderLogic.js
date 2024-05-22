
const loader = document.querySelector(".loader");
const body = document.querySelector("body");

setLoader();

function setLoader() {
    loader.innerHTML = `
    <div class="spinner mb-4">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
    `;
}

export function showLoader() {
    if(loader.classList.contains("hidden")) {
        loader.classList.remove("hidden");
        body.classList.add("overflow-hidden");
    }
    else {
        loader.classList.add("hidden");
        body.classList.remove("overflow-hidden");
    }
}