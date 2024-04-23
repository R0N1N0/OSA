// Este fichero gestiona el apartado de grupos de userInfo
import helpers from "../helpers/utils.js";
import { getUserRequests } from "../helpers/userRequests.js";
import { createGroupLogic, deleteGroupLogic, viewMembersLogic } from "./userLogic/groupLogic.js";

const gruposArticle = document.querySelector(".grupos");
const addGroup = gruposArticle.querySelector(".btn-success");
const modalCreateGroup = document.querySelector(".modalCreateGroup");
const buttonAddGroup = modalCreateGroup.querySelector("input[type=submit]");
const userInfoSection = document.querySelector(".userInfo");
const containerGroups = gruposArticle.querySelector(".gruposContainer");
const modalViewMembers = gruposArticle.querySelector(".modalViewMembers");

export async function printGroups() {
  const alertContainer = helpers.returnAlertContainer(gruposArticle);
  const userGroups = await getUserRequests.getUserGroups();
  helpers.clearHTML(helpers.returnAlertContainer(gruposArticle));

  if (userGroups.length > 0) {
    userGroups.forEach((group) => {
      // configuracion del grupo
      const divConf = document.createElement("div");
      divConf.className = "divConfGroup w-full h-10 absolute top-0";
      const ul = document.createElement("ul");
      ul.className = "h-full flex flex-row justify-end items-center accions";

      const liView = document.createElement("li");
      liView.innerHTML = `<i class="fa-solid fa-eye"></i>`;
      liView.value = group.id_grupo;
      liView.className = "cursor-pointer mr-2 view";
      liView.onclick = (e) => {
        viewMembers(e);
      }
      ul.appendChild(liView);

      if (group.admin) {
        const liEdit = document.createElement("li");
        liEdit.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        liEdit.value = group.id_grupo;
        liEdit.className = "cursor-pointer mr-2 edit";
        const liDelete = document.createElement("li");
        liDelete.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        liDelete.value = group.id_grupo;
        liDelete.className = "cursor-pointer mr-2 delete";
        liDelete.onclick = function (e) {
          deleteGroup(e);
        };
        ul.appendChild(liEdit);
        ul.appendChild(liDelete);
      } else {
        const liOut = document.createElement("li");
        liOut.innerHTML = `<i class="fa-solid fa-right-from-bracket"></i>`;
        liOut.value = group.id_grupo;
        liOut.className = "cursor-pointer mr-2 out";
        ul.appendChild(liOut);
      }
      divConf.appendChild(ul);
      ////////

      // crear todo el div del grupo
      const divGroup = document.createElement("div");
      divGroup.className =
        "relative divGroup w-56 h-56 rounded flex flex-col justify-center";

      const groupName = document.createElement("h2");
      groupName.innerHTML = `<i class="fa-solid fa-user-group"></i> ${group.nombre}`;
      groupName.className = `color-text text-xl ml-4`;

      const groupNumber = document.createElement("span");
      groupNumber.innerHTML = `<i class="fa-solid fa-people-group"></i> ${group.cantidad}`;
      groupNumber.className = "color-text text-lg ml-4 mt-2";
      //añadimos los componentes al div principal
      divGroup.appendChild(divConf);
      divGroup.appendChild(groupName);
      divGroup.appendChild(groupNumber);
      containerGroups.appendChild(divGroup);
    });
  } else {
    helpers.showStaticAlert(
      "No eres participe de ningun grupo.",
      "information",
      alertContainer
    );
  }
}

// eventos
addGroup.addEventListener("click", () => {
  helpers.showModal(modalCreateGroup, userInfoSection);
});
buttonAddGroup.addEventListener("click", (e) => {
  createGroup(e);
});

//funciones
async function createGroup(e) {
  const res = await createGroupLogic(e, modalCreateGroup);
  if (res) {
    helpers.showAlert(
      "Grupo creado correctamente.",
      "success",
      modalCreateGroup.querySelector("form")
    );
    setTimeout(() => {
      reset();
      helpers.showModal(modalCreateGroup, userInfoSection);
    }, 2000);
  }
}

async function deleteGroup(e) {
  e = e.target.parentElement.value;
  if (!e) return;
  if (await deleteGroupLogic(e)) {
    helpers.showAlert("Grupo eliminado correctamente.", "success", helpers.returnAlertContainer(gruposArticle));
    setTimeout(() => {
      reset()
      return;
    }, 2000)
  }
  else{
  return helpers.showAlert(
    "Error al intentar eliminar un grupo.",
    "error",
    helpers.returnAlertContainer(gruposArticle)
  );
}
}

function viewMembers(){
  e = e.target.parentElement.value;
  if(!e) return;
  viewMembersLogic(e);
}
function reset() {
  helpers.clearHTML(containerGroups);
  printGroups();
}
