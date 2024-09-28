function swapValues(a, b) {
    // Menggunakan let karena nilainya akan berubah
    let temp = a;
    a = b;
    b = temp;
    console.log(`Nilai setelah ditukar: a = ${a}, b = ${b}`);
}

swapValues(5, 10);
