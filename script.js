"use strict";

const message = document.querySelector(".form__message");

window.addEventListener("keypress", function (e) {
    message.style.transform = "translateX(0)";
});
