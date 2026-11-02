"use strict";

const menuButton = document.querySelector (".menu-toggle");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", function(){
    if(menu.classList.contains("open")){
        menu.classList.remove("open")
    } else {
        menu.classList.add("open")
    }
})


/*opening hours*/

const statusEl = document.getElementById("opening-status");
const statusText = document.getElementById("status-text");

const now = new Date();
const day = now.getDay();
const hour = now.getHours();

let isOpen = false;

if (day >= 1 && day <= 5) {
    isOpen = hour >= 11 && hour < 21;
} else {
    isOpen = hour >= 12 && hour < 21;
}

if (isOpen) {
    statusText.textContent = "Öppet just nu.";
    statusEl.classList.add("open");
} else {
    statusText.textContent = "Stängt just nu.";
    statusEl.classList.add("closed");
}
