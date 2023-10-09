const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function(event) {
    let isValid = true;

    if (username.value.length < 5) {
        usernameError.textContent = "Username must be at least 5 characters";
        isValid = false;
    } else {
        usernameError.textContent = "";
    }

    if (!isValidEmail(email.value)) {
        emailError.textContent = "Invalid email address";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function isValidEmail(email) {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
