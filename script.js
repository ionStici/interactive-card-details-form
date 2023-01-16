"use strict";

const message = document.querySelector(".form__message");

const form = document.querySelector(".form");
const btn = document.querySelector(".form-btn");

const submit = function (e) {
    e.preventDefault();

    document.documentElement.style.setProperty("--opacity", "0");
    document.documentElement.style.setProperty("--visibility", "hidden");
    document.documentElement.style.setProperty("--events", "none");

    message.style.opacity = "1";
    message.style.visibility = "visible";
    message.style.pointerEvents = "revert";
};

form.addEventListener("submit", submit);
btn.addEventListener("click", submit);
