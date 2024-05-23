import { points } from "../userInfoMain.js";
import helpers from "../../helpers/utils.js";
import { getUserRequests } from "../userRequests.js";
import { printAwards } from "../userAwards.js";


export async function logicAwards(premiosArticle){
    const result = await getUserRequests.assignAward();
    const alertContainer = helpers.returnAlertContainer(premiosArticle);
    if(result.message) {
        helpers.deleteContainer(premiosArticle.querySelector(".alert > div"));
        helpers.showAlert(result.message, "success", alertContainer);
        printAwards();
        const userMachines = await getUserRequests.getUserMachines();
        const userAwards = await getUserRequests.getUserAwards();
        const spanPoints = document.querySelector(".spanPoints");
        spanPoints.textContent = points(userMachines, userAwards);
        return;
    }
    else if(result.error){
       return helpers.showAlert(result.error, "error", alertContainer);
    }
    else if(result.messageSuccess){
       return helpers.showAlert(result.messageSuccess, "success", alertContainer);
    }
    helpers.showAlert("Error al canjear premio, vuelva a intentarlo más tarde", "error", alertContainer);
}

