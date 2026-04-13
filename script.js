// ==========================
// DATA USER (BISA TAMBAH LAGI)
// ==========================
const users = [
    {
        username: "adminDev",
        password: "AdminD3v123"
    },
    {
        username: "costumer",
        password: "costumer1"
    }
];

// ==========================
// FUNCTION LOGIN
// ==========================
function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const error = document.getElementById("error");

    // cek user cocok atau tidak
    const userFound = users.find(user => 
        user.username === usernameInput && user.password === passwordInput
    );

    if (userFound) {
        // simpan login + username
        localStorage.setItem("login", "true");
        localStorage.setItem("username", userFound.username);

        // ==========================
// REDIRECT KE DATA
// ==========================
window.location.href = "data.html";

    } else {
        error.innerText = "Username atau password salah!";
    }
}