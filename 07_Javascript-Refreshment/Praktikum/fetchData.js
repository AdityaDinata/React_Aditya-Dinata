// Fungsi fetchFruits yang menggunakan async-await untuk mengambil data
async function fetchFruits() {
    console.log("Mengambil daftar buah, harap tunggu...");

    // Mensimulasikan pengambilan data dari API dengan setTimeout
    const fruits = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Buah Naga", "Belimbing", "Mangga", "Kelapa"]);
        }, 3000); // Menggunakan Simulasi penundaan 3 detik
    });

    console.log("Daftar buah berhasil diambil:");
    console.log(fruits);
}

// Memanggil fungsi fetchFruits
fetchFruits();
