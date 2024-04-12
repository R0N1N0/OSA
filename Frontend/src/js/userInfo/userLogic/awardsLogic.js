import { points } from "../userInfoMain.js";
import { fetchPostWithDataToken } from "../../helpers/requests.js";
import helpers from "../../helpers/utils.js";


export async function logicAwards(premiosArticle, awardsNumber, awards, userAwards, token){
    const alertContainer = helpers.returnAlertContainer(premiosArticle);
    if(points() < 5) return helpers.showAlert("No tienes suficientes puntos disponibles.", "error", alertContainer);
    if(awardsNumber == 0) return helpers.showStaticAlert("No hay premios disponibles.", "error", alertContainer);
    if(awardsNumber == userAwards.length) return helpers.showAlert("Felicidadessss, ha conseguido todos los premios disponibles", "success", alertContainer);

    let awardNumber = Math.floor(Math.random() * awardsNumber+1);
    let hasAward = userAwards.some(award => award.id_premio == awardNumber);

    while(hasAward){ 
        awardNumber = Math.floor(Math.random() * awardsNumber+1);
        hasAward = userAwards.some(award => award.id_premio == awardNumber);
    }

    const result = await fetchPostWithDataToken("user/award/assignAward", token, {awardNumber});
    if(result) {
        helpers.deleteContainer(premiosArticle.querySelector(".alert > div"));
        helpers.showAlert(result.message, "success", alertContainer);
        return true;
    }

    helpers.showStaticAlert("Error al canjear premio, vuelva a intentarlo más tarde", "error", alertContainer);

}

