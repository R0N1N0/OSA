import { showMV } from "./mv.js";

// funciones para filtrar

export function filter(e, mvDisp){
    const inputValue = e.target.value.trim().toLowerCase();
    //filtrar por nombre de maquinas
    mvDisp = mvDisp.filter(mv => {
        if(inputValue === ""){
            return mv;
        }
        if(mv.nombre.toLowerCase().includes(inputValue)){
            return mv;
        }
    });
    showMV(mvDisp);
}