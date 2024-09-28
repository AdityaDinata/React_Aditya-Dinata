const reverseFirstTwo = (array) => {
    // Menggunakan destructuring untuk mengambil dua elemen pertama
    const [a, b] = array;
    // Mengembalikan elemen dalam urutan terbalik
    return [b, a];
};

console.log(reverseFirstTwo(['SD', 'SMP', 'SMA', 'Universitas'])); //Contoh penggunaan 1
console.log(reverseFirstTwo(['Kelas 1', 'Kelas 2', 'Kelas 3'])); //Contoh penggunaan 2
console.log(reverseFirstTwo(['Matematika', 'Bahasa Indonesia', 'IPA'])); //Contoh penggunaan 3
