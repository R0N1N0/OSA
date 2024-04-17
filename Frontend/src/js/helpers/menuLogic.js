
document.addEventListener("DOMContentLoaded", menuLogic)

async function menuLogic(){
  const header = document.querySelectorAll("header")[0];
    const nav = document.createElement("nav");
    nav.className = "w-full flex h-24 fixed top-0 z-40 justify-around items-center";
    nav.innerHTML = `
        <div class="flex flex-row items-center">
          <img class="size-24" src="../img/OSA_normalLogo.png" alt="Logo OSA" />
          <h5 class="text-lg">
            <strong class="O">O</strong> <strong class="S">S</strong>
            <strong class="A">A</strong>
          </h5>
        </div>
        <ul class="flex flex-row">
          <li>
            <a href="../index.html"><i class="fa-solid fa-house"></i> Home</a>
          </li>
          <li class="ml-6">
            <a href="./public/mv.html"
              ><i class="fa-solid fa-cube"></i> Maquinas virtuales</a
            >
          </li>
          <li class="ml-6">
            <a href=""><i class="fa-solid fa-building-columns"></i> Academia</a>
          </li>
          <li class="ml-6">
            <a href=""><i class="fa-solid fa-info"></i> Ayuda</a>
          </li>
          <li class="ml-10">
            <a href="login.html"><i class="fa-regular fa-user"></i></a>
          </li>
        </ul>
    `;
    header.insertBefore(nav, header.firstChild);
}