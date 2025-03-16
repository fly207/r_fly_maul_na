function login(username, password) {
    const validUsername = "rafly";
    const validPassword = "200076";

    if (username === validUsername && password === validPassword) {
        console.log("Login berhasil! Mengarahkan ke beranda...");
        return true;
    } else {
        console.log("Username atau password salah!");
        return false;
    }
}

// Contoh penggunaan:
const user = prompt("Masukkan username:");
const pass = prompt("Masukkan password:");

if (login(user, pass)) {
    alert("Login berhasil! Anda akan diarahkan ke beranda.");
    // window.location.href = "beranda.html"; // Aktifkan ini jika ingin diarahkan ke halaman lain
} else {
    alert("Login gagal! coba lagi.");
}
