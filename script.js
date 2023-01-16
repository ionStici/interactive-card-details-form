"use strict";

// SELECT ELEMENTS

const messageWrapper = document.querySelector(".form__message");

const form = document.querySelector(".form");
const btn = document.querySelector(".form-btn");

const cardCvcImg = document.querySelector(".three-zeros");
const cardNumberImg = document.querySelector(".zeros");

const cardHolderDateImg = document.querySelector(".card-holder-date");
const cardMonthImg = document.querySelector(".month");
const cardYearImg = document.querySelector(".year");

const cardHolderNameImg = document.querySelector(".card-holder-name");

const cardHolderInput = document.querySelector("#card-holder");
const cardNumberInput = document.querySelector("#card-number");

const cardMonthInput = document.querySelector("#exp-date");
const cardYearInput = document.querySelector("#month");
const cardCvcInput = document.querySelector("#cvc");

//

const validate = function (e) {
    e.preventDefault();

    if (cardHolderInput.value) {
        cardHolderInput.style.border = "1px solid #dfdee0";
        cardHolderNameImg.textContent = cardHolderInput.value;
    } else {
        cardHolderInput.style.border = "1px solid #ff5050";
    }

    if (cardMonthInput.value.length === 2) {
        cardMonthImg.textContent = cardMonthInput.value;
        cardMonthInput.style.border = "1px solid #dfdee0";
    } else {
        cardMonthInput.style.border = "1px solid #ff5050";
    }

    if (cardYearInput.value.length === 2) {
        cardYearImg.textContent = cardYearInput.value;
        cardYearInput.style.border = "1px solid #dfdee0";
    } else {
        cardYearInput.style.border = "1px solid #ff5050";
    }

    if (cardCvcInput.value.length === 3) {
        cardCvcImg.textContent = cardCvcInput.value;
        cardCvcInput.style.border = "1px solid #dfdee0";
    } else {
        cardCvcInput.style.border = "1px solid #ff5050";
    }

    // prettier-ignore
    if ((/^\d+$/.test(cardNumberInput.value) && cardNumberInput.value.length === 16)) {
        const num = cardNumberInput.value;
        cardNumberImg.textContent = `${num.slice(0,4)} ${num.slice(4,8)} ${num.slice(8,12)} ${num.slice(12,16)}`;
        cardNumberInput.style.border = "1px solid #dfdee0";
    } else {
        cardNumberInput.style.border = "1px solid #ff5050";
    }

    if (!cardHolderInput.value) return;
    // prettier-ignore
    if (!(/^\d+$/.test(cardNumberInput.value) && cardNumberInput.value.length === 16)) return;
    if (cardMonthInput.value.length !== 2) return;
    if (cardYearInput.value.length !== 2) return;
    if (cardCvcInput.value.length !== 3) return;

    cardConfirmed();
};

const cardConfirmed = function () {
    document.documentElement.style.setProperty("--opacity", "0");
    document.documentElement.style.setProperty("--visibility", "hidden");
    document.documentElement.style.setProperty("--events", "none");

    messageWrapper.style.opacity = "1";
    messageWrapper.style.visibility = "visible";
    messageWrapper.style.pointerEvents = "revert";
};

form.addEventListener("submit", validate);
btn.addEventListener("click", validate);
