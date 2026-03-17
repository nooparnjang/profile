import {proLink} from "./data1.js"

let FFF = document.getElementById("FFF");
let Kinsud = document.getElementById("Kinsud");
let SB = document.getElementById("SB");

FFF.addEventListener("click", f);
Kinsud.addEventListener("click", k);
SB.addEventListener("click", s);

function f() {
    window.open(proLink[0].link, "_blank");
}

function k() {
    window.open(proLink[1].link, "_blank");
}

function s() {
    window.open(proLink[2].link, "_blank");
}