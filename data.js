// ==========================
// CEK LOGIN
// ==========================
if (localStorage.getItem("login") !== "true") {
    window.location.href = "index.html";
}

// ==========================
// TAMPILKAN USER
// ==========================
const username = localStorage.getItem("username");
document.getElementById("welcome").innerText =
    "Halo, " + username + " 👋";

// ==========================
// WHATSAPP (CONTOH ISI)
// ==========================
// ==========================
// KIRIM KE WHATSAPP (FIX)
// ==========================
function kirimWA() {
    const nama = document.getElementById("nama").innerText.trim();
    const telepon = document.getElementById("telepon").innerText.trim();
    const jenis = document.getElementById("jenis").innerText.trim();
    const total = document.getElementById("total").innerText.trim();
    const tanggal = document.getElementById("tanggal").innerText.trim();
    const link = document.getElementById("link").innerText.trim();

    if (!nama || !telepon || !jenis || !total || !tanggal) {
        alert("Isi semua data dulu!");
        return;
    }

    const pesan = `Halo Admin Naxas Store 👋

DATA GARANSI BARU 📦

Nama: ${nama}
No HP: ${telepon}
Jenis Garansi: ${jenis}
Total Garansi: ${total}
Tanggal: ${tanggal}
Link: ${link}`;

    const nomor = "6281809730331";
    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");
}

// ==========================
// LOGOUT
// ==========================
function logout() {
    localStorage.removeItem("login");
    localStorage.removeItem("username");
    window.location.href = "index.html";
}

