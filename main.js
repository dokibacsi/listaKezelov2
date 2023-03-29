import { OBJECTLISTA } from "./adat.js";
import { rendezes, rendezes2 } from "./rendezes.js";
import { szures } from "./szures.js";

$(() => {
    
    rendezes(OBJECTLISTA, "nev");
    rendezes(OBJECTLISTA, "kor");
    rendezes(OBJECTLISTA, "fajta");
    console.log(szures(OBJECTLISTA));

    const NEVIMPUTELEM = $("#nev")
    const FAJTAIMPUTELEM = $("#fajta")

    
    NEVIMPUTELEM.on("keyup", ()=>{
        let nevErtek = NEVIMPUTELEM.val()
        let szurtLista = szures(OBJECTLISTA, "nev", nevErtek)
        console.log(szurtLista)
    })
});