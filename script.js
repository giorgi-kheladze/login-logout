document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("signup-username").value.trim();
        const email = document.getElementById("signup-email").value.trim();
        const password = document.getElementById("signup-password").value;
        const confirmPassword = document.getElementById("signup-confirm-password").value;
        const errorMessage = document.getElementById("signup-error-message");

        errorMessage.textContent = "";

        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match!";
            return;
        }

        if (password.length < 6) {
            errorMessage.textContent = "Password must be at least 6 characters long.";
            return;
        }

        alert("Signup successful!");
        signupForm.reset();
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("login-username").value.trim();
        const password = document.getElementById("login-password").value;
        const errorMessage = document.getElementById("login-error-message");

        errorMessage.textContent = "";

        if (username === "" || password === "") {
            errorMessage.textContent = "All fields are required!";
            return;
        }

        alert("Login successful!");
        loginForm.reset();
    });
});
