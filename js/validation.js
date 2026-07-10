const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");


nameInput.addEventListener("input", function () {

    if (nameInput.value.trim() === "") {

        nameError.textContent = "Name is required";

    } else if (nameInput.value.trim().length < 3) {

        nameError.textContent = "Name must be at least 3 characters";

    } else {

        nameError.textContent = "";

    }

});

emailInput.addEventListener("input", function () {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {

        emailError.textContent = "Email is required";

    } else if (!emailPattern.test(emailInput.value)) {

        emailError.textContent = "Enter a valid email address";

    } else {

        emailError.textContent = "";

    }

});

phoneInput.addEventListener("input", function () {

    const phonePattern = /^[0-9]{10}$/;

    if (phoneInput.value.trim() === "") {

        phoneError.textContent = "Phone number is required";

    } 
    else if (!phonePattern.test(phoneInput.value)) {

        phoneError.textContent = "Enter a valid 10-digit phone number";

    } 
    else {

        phoneError.textContent = "";

    }

});