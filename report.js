const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const toggleClose = document.querySelector('.menu-toggle-close');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    toggleClose.classList.toggle('active');
    menuToggle.classList.toggle('hidden');
});

toggleClose.addEventListener('click', () => {
    navbar.classList.remove('active');
    toggleClose.classList.remove('active');
    menuToggle.classList.remove('hidden');
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const serverInput = document.getElementById("server");
    const issueInput = document.getElementById("issue");
    const followupCheckbox = document.getElementById("followup");

    form.addEventListener("submit", (event) => {
        let isValid = true;
        let errorMessage = "";

        if (!usernameInput.value || usernameInput.value.length < 3) {
            isValid = false;
            errorMessage += "Username must not be empty and must be at least 3 characters long.\n";
        }

        if (!emailInput.value.endsWith("@gmail.com")) {
            isValid = false;
            errorMessage += "Email must end with @gmail.com.\n";
        }

        if (!serverInput.value) {
            isValid = false;
            errorMessage += "Server must be selected.\n";
        }

        if (!issueInput.value || issueInput.value.length < 10) {
            isValid = false;
            errorMessage += "Bug description must be at least 10 characters long.\n";
        }

        if (!followupCheckbox.checked) {
            isValid = false;
            errorMessage += "You must agree to receive follow-up emails.\n";
        }

        if (!isValid) {
            event.preventDefault();
            alert(errorMessage);
        }
    });
});
