const calculator = {
    add: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    },

    multiply: function(a, b) {
        return a * b;
    },

    divide: function(a, b) {
        if (b === 0) {
            return 'Error: Cannot divide by zero';
        }
        return a / b;
    }
};

// Contoh penggunaan
console.log(calculator.add(5, 10));        // contoh penggunaan tambah
console.log(calculator.subtract(10, 5));   // contoh penggunaan kurang
console.log(calculator.multiply(5, 10));   // contoh penggunaan kali
console.log(calculator.divide(10, 2));     // contoh penggunaan bagi
console.log(calculator.divide(10, 0));     // contoh jika dibagi dengan 0
