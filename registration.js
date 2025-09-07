const form = document.getElementById("signupForm");
function clearErrors() {
    document.querySelectorAll(".error").forEach(el => {
        el.textContent = "";
    });
}
form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    clearErrors(); 
    const username = document.getElementById("Username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const retypePassword = document.getElementById("retypePassword").value.trim();
    let hasError = false;
    if (username === "") {
        document.getElementById("usernameError").textContent = "Username kiritilmagan!";
        hasError = true;
    }
    if (email === "") {
        document.getElementById("emailError").textContent = "Email kiritilmagan!";
        hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent = "Email notug'ri formatda!";
        hasError = true;
    }
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password kiritilmagan!";
        hasError = true;
    } else if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password kamida 6 ta belgidan iborat bulishi kerak!";
        hasError = true;
    }
    if (password !== retypePassword) {
        document.getElementById("retypePasswordError").textContent = "Parollar mos emas!";
        hasError = true;
    }
    if (!hasError) {
        alert("Ruyxatdan utish muvaffaqiyatli amalga oshdi!");
        form.reset();
    }
});
