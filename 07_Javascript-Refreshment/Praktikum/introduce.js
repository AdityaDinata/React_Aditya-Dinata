// Membuat kelas Person
class Person {
    // Konstruktor untuk menginisialisasi properti name dan age
    constructor(name, age) {
        this.name = name; // Ini Untuk Mengatur properti name
        this.age = age;   // Ini Untuk Mengatur properti age
    }

    // Metode introduce untuk memperkenalkan diri
    introduce() {
        console.log(`Halo, nama saya ${this.name} dan saya berumur ${this.age} tahun.`);
    }
}

// Membuat instance dari kelas Person
const person1 = new Person("Aditya Dinata", 20);

// Memanggil metode introduce
person1.introduce();
