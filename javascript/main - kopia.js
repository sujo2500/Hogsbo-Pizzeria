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
