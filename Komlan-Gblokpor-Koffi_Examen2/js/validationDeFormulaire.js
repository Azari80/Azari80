
function validationFormulaire() {
    let codeRegional = document.getElementById("phone");

    let codeRegionalPermise = false;

    switch(codeRegional.value) {
        case "819":
            codeRegionalPermise = true;
            break;
        case "418":
            codeRegionalPermise = true;
            break;
        case "514":
            codeRegionalPermise = true;
            break;
    }

    if(codeRegionalPermise === false){
        alert(" SVP Vous n'avaez pas entré le bon CODE REGIONAL !!!! Veuillez choisir un code regional entre  ceux-ci: 819; 418; 514 MERCI !!!! ");
    }
    return "Bravo vous avez bien entré le bon code regional";
}


