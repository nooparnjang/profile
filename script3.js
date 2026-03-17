import {contact} from "./data2.js"

let IG = document.getElementById("con_ig");
let Line = document.getElementById("con_line");
let Email = document.getElementById("con_gmail");

IG.addEventListener("click", ig);
Line.addEventListener("click", l);
Email.addEventListener("click", e);

function ig() {
    window.open(contact[0].link, "_blank");
}

function l() {
    window.open(contact[1].link, "_blank");
}

function e() {
    window.open(contact[2].link, "_blank");
}