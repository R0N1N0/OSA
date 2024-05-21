import { getUserRequests } from "../userInfo/userRequests.js";

menuLogic();
async function menuLogic(){
  const header = document.querySelector("header");
    const nav = document.createElement("nav");
    nav.className = `w-full flex h-24 fixed z-40 top-0 z-50 justify-around items-center 
    bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)
    `;
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
            <a href="./mv.html"
              ><i class="fa-solid fa-cube"></i> Maquinas virtuales</a
            >
          </li>
          <li class="ml-6">
            <a href="./academy.html"><i class="fa-solid fa-building-columns"></i> Academia</a>
          </li>
          <li class="ml-6">
            <a href="./help.html"><i class="fa-solid fa-info"></i> Ayuda</a>
          </li>
          <li class="ml-10 user">
            <a href="login.html"><i class="fa-regular fa-user"></i></a>
          </li>
        </ul>
    `;
    header.insertBefore(nav, header.firstChild);
    header.insertBefore(nav, header.firstChild);
    const elementUser = document.querySelector(".user a");
    checkUserAuth(elementUser);
}
async function checkUserAuth(elementUser) {
  const userData = await getUserRequests.getUserInfo();
  if(userData) return elementUser.href = "../public/userInfo.html";
  return elementUser.href = "../public/login.html";
}