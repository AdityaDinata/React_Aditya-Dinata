const form = document.getElementById('productForm'); // Mengambil elemen form
const tableBody = document.getElementById('tableBody'); // Mengambil elemen tabel tempat data produk akan ditampilkan
const searchInput = document.getElementById('searchInput'); // Mengambil input pencarian
const searchButton = document.getElementById('searchButton'); // Mengambil tombol pencarian
const deleteButton = document.getElementById('deleteButton'); // Mengambil tombol hapus
let productCount = 0; // Menghitung jumlah produk

// Ketika halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const products = JSON.parse(localStorage.getItem('products')) || []; // Mengambil data produk dari localStorage atau membuat array kosong jika tidak ada
    products.forEach(product => {
        addRowToTable(product); // Menambahkan setiap produk ke tabel
    });
});

// Fungsi pencarian
searchButton.addEventListener('click', () => {
    const searchValue = searchInput.value.toLowerCase(); // Mengambil nilai pencarian dalam huruf kecil
    const rows = tableBody.querySelectorAll('tr'); // Mengambil semua baris dalam tabel
    
    rows.forEach(row => {
        const productName = row.cells[1].textContent.toLowerCase(); // Mengambil nama produk dari setiap baris
        row.style.display = productName.includes(searchValue) ? '' : 'none'; // Menyembunyikan atau menampilkan baris berdasarkan pencarian
    });
});

// Fungsi hapus produk
deleteButton.addEventListener('click', () => {
    const rows = tableBody.querySelectorAll('tr'); // Mengambil semua baris dalam tabel
    const products = JSON.parse(localStorage.getItem('products')) || []; // Mengambil produk dari localStorage
    const searchValue = searchInput.value.toLowerCase(); // Mengambil nilai pencarian
    let deletedCount = 0; // Menghitung produk yang dihapus

    // Memfilter produk yang akan dihapus
    rows.forEach(row => {
        const checkbox = row.querySelector('input[type="checkbox"]'); // Mengambil checkbox di setiap baris
        const productName = row.cells[1].textContent.toLowerCase(); // Mengambil nama produk

        if (checkbox.checked && productName.includes(searchValue)) { // Jika checkbox dicentang dan produk sesuai pencarian
            const productIndex = products.findIndex(product => product.name.toLowerCase() === productName); // Mencari indeks produk
            if (productIndex !== -1) {
                products.splice(productIndex, 1); // Menghapus produk dari array
                deletedCount++; // Menambah hitungan produk yang dihapus
            }
            tableBody.removeChild(row); // Menghapus baris dari tabel
        }
    });

    // Menyimpan perubahan ke localStorage
    localStorage.setItem('products', JSON.stringify(products));
    
    // Menampilkan pesan setelah penghapusan
    if (deletedCount > 0) {
        alert(`${deletedCount} Produk telah berhasil dihapus.`);
    } else {
        alert('tidak ada produk untuk di hapus');
    }
});

// Event submit form
form.addEventListener('submit', function(event) {
    let isValid = true;

    // Validasi nama produk
    const productName = document.getElementById('productName');
    const nameError = document.getElementById('nameError');
    if (productName.value.trim() === '') { // Jika nama produk kosong
        nameError.classList.remove('hidden'); // Menampilkan pesan error
        isValid = false;
    } else {
        nameError.classList.add('hidden'); // Menyembunyikan pesan error
    }

    // Validasi kategori produk
    const productCategory = document.getElementById('productCategory');
    const categoryError = document.getElementById('categoryError');
    if (productCategory.value === '') { // Jika kategori produk belum dipilih
        categoryError.classList.remove('hidden');
        isValid = false;
    } else {
        categoryError.classList.add('hidden');
    }

    // Validasi gambar produk
    const productImage = document.getElementById('productImage');
    const imageError = document.getElementById('imageError');
    if (productImage.files.length === 0) { // Jika gambar belum diupload
        imageError.classList.remove('hidden');
        isValid = false;
    } else {
        imageError.classList.add('hidden');
    }

    // Validasi kesegaran produk
    const freshness = document.querySelector('input[name="freshness"]:checked');
    const freshnessError = document.getElementById('freshnessError');
    if (!freshness) { // Jika kesegaran produk belum dipilih
        freshnessError.classList.remove('hidden');
        isValid = false;
    } else {
        freshnessError.classList.add('hidden');
    }

    // Validasi deskripsi produk
    const productDescription = document.getElementById('productDescription');
    const descriptionError = document.getElementById('descriptionError');
    if (productDescription.value.trim() === '') { // Jika deskripsi kosong
        descriptionError.classList.remove('hidden');
        isValid = false;
    } else {
        descriptionError.classList.add('hidden');
    }

    // Validasi harga produk
    const productPrice = document.getElementById('productPrice');
    const priceError = document.getElementById('priceError');
    if (productPrice.value.trim() === '') { // Jika harga kosong
        priceError.classList.remove('hidden');
        isValid = false;
    } else {
        priceError.classList.add('hidden');
    }

    // Jika tidak valid, hentikan proses submit
    if (!isValid) {
        event.preventDefault();
        return;
    }
   
    event.preventDefault(); // Mencegah form dari reload halaman

    // Membuat objek produk baru
    const newProduct = {
        name: productName.value,
        category: productCategory.options[productCategory.selectedIndex].text,
        image: productImage.files[0].name,
        freshness: freshness.value,
        description: productDescription.value,
        price: productPrice.value,
    };

    addRowToTable(newProduct); // Menambahkan produk baru ke tabel
    saveToLocalStorage(newProduct); // Menyimpan produk ke localStorage

    // Reset form setelah submit
    form.reset();

    // Menampilkan pesan sukses
    alert('produk berhasil ditambahkan!');
});

// Fungsi untuk menambah baris baru ke tabel
function addRowToTable(product) {
    productCount++; // Menambah hitungan produk
    const row = document.createElement('tr');
    row.innerHTML = `
        <td class="py-2 px-4 border-b">${productCount}</td>
        <td class="py-2 px-4 border-b">${product.name}</td>
        <td class="py-2 px-4 border-b">${product.category}</td>
        <td class="py-2 px-4 border-b">${product.image}</td>
        <td class="py-2 px-4 border-b">${product.freshness}</td>
        <td class="py-2 px-4 border-b">${product.description}</td>
        <td class="py-2 px-4 border-b">${product.price}</td>
        <td class="py-2 px-4 border-b"><input type="checkbox"></td>
    `;
    tableBody.appendChild(row); // Menambahkan baris baru ke body tabel
}

// Fungsi untuk menyimpan produk ke localStorage
function saveToLocalStorage(product) {
    const products = JSON.parse(localStorage.getItem('products')) || []; // Mengambil produk dari localStorage
    products.push(product); // Menambahkan produk baru ke array
    localStorage.setItem('products', JSON.stringify(products)); // Menyimpan kembali ke localStorage
}
