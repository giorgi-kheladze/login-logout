const form = document.getElementById("form");
const email_input = document.getElementById("email");
const password_input = document.getElementById("password");
const email_label = document.getElementById("email-label");
const password_label = document.getElementById("password-label");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    email_input.classList.add("error-input");
    email_label.classList.add("error");
    console.log(email_input);
    console.log(email_label);
});

const allInputs = [email_input, email_label]
allInputs.forEach(input =>{
    input.addEventListener('input', () => {
        if(input.classList.contains('error')){
            input.classList.remove("error");
        }
    })
})
