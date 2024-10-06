const form = document.getElementById('productForm');
const tableBody = document.getElementById('tableBody');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const deleteButton = document.getElementById('deleteButton');
let productCount = 0;


document.addEventListener('DOMContentLoaded', () => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.forEach(product => {
        addRowToTable(product);
    });
});

//Searching 
searchButton.addEventListener('click', () => {
    const searchValue = searchInput.value.toLowerCase();
    const rows = tableBody.querySelectorAll('tr');
    
    rows.forEach(row => {
        const productName = row.cells[1].textContent.toLowerCase();
        row.style.display = productName.includes(searchValue) ? '' : 'none';
    });
});

//Delete
deleteButton.addEventListener('click', () => {
    const rows = tableBody.querySelectorAll('tr');
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const searchValue = searchInput.value.toLowerCase(); 
    let deletedCount = 0; 

    // Filter 
    rows.forEach(row => {
        const checkbox = row.querySelector('input[type="checkbox"]');
        const productName = row.cells[1].textContent.toLowerCase(); 

        if (checkbox.checked && productName.includes(searchValue)) {
            const productIndex = products.findIndex(product => product.name.toLowerCase() === productName);
            if (productIndex !== -1) {
                products.splice(productIndex, 1); 
                deletedCount++; 
            }
            tableBody.removeChild(row); 
        }
    });

    // Save 
    localStorage.setItem('products', JSON.stringify(products));
    
    // Alert 
    if (deletedCount > 0) {
        alert(`${deletedCount} Produk telah berhasil dihapus.`);
    } else {
        alert('tidak ada produk untuk di hapus');
    }
});


// Handle 
form.addEventListener('submit', function(event) {
    let isValid = true;

    // Validate 
    const productName = document.getElementById('productName');
    const nameError = document.getElementById('nameError');
    if (productName.value.trim() === '') {
        nameError.classList.remove('hidden');
        isValid = false;
    } else {
        nameError.classList.add('hidden');
    }

    // Validate 
    const productCategory = document.getElementById('productCategory');
    const categoryError = document.getElementById('categoryError');
    if (productCategory.value === '') {
        categoryError.classList.remove('hidden');
        isValid = false;
    } else {
        categoryError.classList.add('hidden');
    }

    // Validate 
    const productImage = document.getElementById('productImage');
    const imageError = document.getElementById('imageError');
    if (productImage.files.length === 0) {
        imageError.classList.remove('hidden');
        isValid = false;
    } else {
        imageError.classList.add('hidden');
    }

    // Validate
    const freshness = document.querySelector('input[name="freshness"]:checked');
    const freshnessError = document.getElementById('freshnessError');
    if (!freshness) {
        freshnessError.classList.remove('hidden');
        isValid = false;
    } else {
        freshnessError.classList.add('hidden');
    }

    // Validate
    const productDescription = document.getElementById('productDescription');
    const descriptionError = document.getElementById('descriptionError');
    if (productDescription.value.trim() === '') {
        descriptionError.classList.remove('hidden');
        isValid = false;
    } else {
        descriptionError.classList.add('hidden');
    }

    // Validate 
    const productPrice = document.getElementById('productPrice');
    const priceError = document.getElementById('priceError');
    if (productPrice.value.trim() === '') {
        priceError.classList.remove('hidden');
        isValid = false;
    } else {
        priceError.classList.add('hidden');
    }

    
    if (!isValid) {
        event.preventDefault();
        return;
    }
   
    event.preventDefault(); 

    const newProduct = {
        name: productName.value,
        category: productCategory.options[productCategory.selectedIndex].text,
        image: productImage.files[0].name,
        freshness: freshness.value,
        description: productDescription.value,
        price: productPrice.value,
    };

    addRowToTable(newProduct);
    saveToLocalStorage(newProduct);

    // Clear 
    form.reset();

    // Alert
    alert('produk berhasil ditambahkan!');
});

function addRowToTable(product) {
    productCount++;
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
    tableBody.appendChild(row);
}

function saveToLocalStorage(product) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}
