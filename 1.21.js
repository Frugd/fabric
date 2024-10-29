function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const correctPassword = "111";
    const errorMessage = document.getElementById("errorMessage");

    if (password === correctPassword) {
        document.getElementById("passwordModal").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        errorMessage.style.display = "block";
    }
}
