"use strict";

/*menu toggle*/
const menuButton = document.querySelector (".menu-toggle");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", function(){
    if(menu.classList.contains("open")){
        menu.classList.remove("open")
    } else {
        menu.classList.add("open")
    }
})


/*Send email*/
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
    
        const subject = "meddelande från" + name;
    const body = "namn:" + name + "\n" +
                 "email:" + email + "\n\n" +
                 "meddelande:" + message;
                
                window.location.href = "mailto:samajabar@gmail.com" + 
            "?subject=" + encodeURIComponent(subject) + 
            "&body=" + encodeURIComponent(body);
        });
    }



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
