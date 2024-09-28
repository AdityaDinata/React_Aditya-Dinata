function findLargest(arr) {
    // Inisialisasi variabel untuk menyimpan nilai terbesar, dimulai dengan elemen pertama
    let largest = arr[0];
    
    // Loop melalui elemen-elemen array, dimulai dari indeks 1
    for (let i = 1; i < arr.length; i++) {
        // Jika elemen saat ini lebih besar dari 'largest', update 'largest'
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    
    // Kembalikan nilai terbesar
    return largest;
}
console.log(findLargest([45, 67, 89, 23, 90, 12])); //Contoh penggunaan 1 
console.log(findLargest([150, 200, 75, 180, 300, 250])); //Contoh penggunaan 2
console.log(findLargest([-3, -1, -4, -2, -7])); //Contoh penggunaan 3 
