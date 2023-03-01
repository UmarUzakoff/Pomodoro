document.getElementById('Roboto').onclick = changeRoboto;
document.getElementById('SpaceMono').onclick = changeSpaceMono;
document.getElementById('KumbhSans').onclick = changeKumbhSans;

var Roboto = "Poppins" 

function changeRoboto() {
    if (Roboto == "Poppins" || Roboto == "Space Mono" || Roboto == "Kumbh Sans") {
        document.body.style.fontFamily = "Roboto";
        Roboto = "Roboto"
    } else {
        document.body.style.fontFamily = "Poppins";
        Roboto = "Poppins"
    }
    return Roboto
}

function changeSpaceMono() {
    if (Roboto == "Poppins" || Roboto == "Roboto" || Roboto == "Kumbh Sans") {
        document.body.style.fontFamily = "Space Mono";
        Roboto = "Space Mono"
    } else {
        document.body.style.fontFamily = "Poppins";
        Roboto = "Poppins"
    }
    return Roboto
}
function changeKumbhSans() {
    if (Roboto == "Poppins" || Roboto == "Roboto" || Roboto == "Space Mono") {
        document.body.style.fontFamily = "Kumbh Sans";
        Roboto = "Kumbh Sans"
    } else {
        document.body.style.fontFamily = "Poppins";
        Roboto = "Poppins"
    }
    return Roboto
}