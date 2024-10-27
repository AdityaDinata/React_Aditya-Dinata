import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, editProduct } from '../store/productReducer';

const ContentForm = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  
  const [formData, setFormData] = useState({
    id: '',
    productName: '',
    productCategory: '',
    productImage: null,
    freshness: '',
    productDescription: '',
    productPrice: '',
  });

  const [errors, setErrors] = useState({
    productName: '',
    category: '',
    image: '',
    freshness: '',
    description: '',
    price: '',
  });

  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    alert('Selamat datang');
  }, []);

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === 'productImage') {
      const file = files[0];
      setFormData((prev) => ({ ...prev, [name]: file }));
      setImagePreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!formData.productName) newErrors.productName = 'Nama produk harus diisi';
    if (!formData.productCategory) newErrors.category = 'Kategori produk harus dipilih';
    if (!formData.productImage) newErrors.image = 'Gambar produk harus diunggah';
    if (!formData.freshness) newErrors.freshness = 'Kualitas produk harus dipilih';
    if (!formData.productDescription) newErrors.description = 'Deskripsi tambahan harus diisi';
    if (!formData.productPrice) newErrors.price = 'Harga produk harus diisi';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newProduct = {
      id: formData.id || Date.now().toString(), 
      productName: formData.productName,
      productCategory: formData.productCategory,
      image: imagePreview,
      freshness: formData.freshness,
      additionalDescription: formData.productDescription,
      productPrice: formData.productPrice,
    };

    if (formData.id) {
      dispatch(editProduct(newProduct));
    } else {
      dispatch(addProduct(newProduct)); 
    }

    setFormData({
      id: '',
      productName: '',
      productCategory: '',
      productImage: null,
      freshness: '',
      productDescription: '',
      productPrice: '',
    });

    setImagePreview(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    alert('Produk berhasil dihapus!');
  };

  const handleEdit = (product) => {
    setFormData({
      id: product.id,
      productName: product.productName,
      productCategory: product.productCategory,
      productImage: null, 
      freshness: product.freshness,
      productDescription: product.additionalDescription,
      productPrice: product.productPrice,
    });
    setImagePreview(product.image); 
  };

  return (
    <div className="flex flex-col items-center">
      <form className="space-y-6 w-full max-w-md" onSubmit={handleSubmit}>
        <h4 className="text-xl font-bold mb-4">Detail Produk</h4>

        <div className="relative">
          <label htmlFor="productName" className="block mb-2 text-base">Nama Produk</label>
          <input
            type="text"
            id="productName"
            name="productName"
            className="w-full h-9 rounded-md border border-gray-300 p-2 text-black"
            placeholder="Silakan masukkan nama produk"
            value={formData.productName}
            onChange={handleChange}
            required
          />
          {errors.productName && <p className="mt-1 text-sm text-red-600">{errors.productName}</p>}
        </div>

        <div className="relative">
          <label htmlFor="productCategory" className="block mb-2 text-base">Kategori Produk</label>
          <select
            id="productCategory"
            name="productCategory"
            className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md text-black"
            value={formData.productCategory}
            onChange={handleChange}
            required
          >
            <option value="">Pilih...</option>
            <option value="1">Kategori 1</option>
            <option value="2">Kategori 2</option>
            <option value="3">Kategori 3</option>
          </select>
          {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
        </div>

        <div>
          <label htmlFor="productImage" className="block mb-2 text-base">Gambar Produk</label>
          <input
            type="file"
            id="productImage"
            name="productImage"
            className="block w-full text-blue-600 border border-[#0D6EFD] rounded-lg file:py-2 file:px-4 file:bg-[#0D6EFD] file:text-white file:border-none file:text-sm hover:file:bg-blue-700"
            onChange={handleChange}
            required={!formData.id}
          />
          {imagePreview && <img src={imagePreview} alt="Preview Produk" className="mt-2 w-32 h-32 object-cover" />}
          {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
        </div>

        <div>
          <label className="block mb-2 text-base">Kualitas Produk</label>
          <div className="space-y-2">
            {['Baru', 'Bekas', 'Diperbarui'].map((item) => (
              <div className="flex items-center" key={item}>
                <input
                  type="radio"
                  name="freshness"
                  id={item}
                  value={item}
                  className="mr-2"
                  onChange={handleChange}
                  checked={formData.freshness === item}
                  required
                />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>
          {errors.freshness && <p className="mt-1 text-sm text-red-600">{errors.freshness}</p>}
        </div>

        <div>
          <label htmlFor="productDescription" className="block mb-2 text-base">Deskripsi Tambahan</label>
          <textarea
            id="productDescription"
            name="productDescription"
            className="w-full p-2 border border-gray-300 rounded text-black"
            rows="3"
            value={formData.productDescription}
            onChange={handleChange}
            required
          ></textarea>
          {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
        </div>

        <div>
          <label htmlFor="productPrice" className="block mb-2 text-base">Harga Produk</label>
          <input
            type="number"
            id="productPrice"
            name="productPrice"
            className="w-full h-9 rounded-md border border-gray-300 p-2 text-black"
            placeholder="$ 1"
            value={formData.productPrice}
            onChange={handleChange}
            required
          />
          {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
        >
          {formData.id ? 'Perbarui' : 'Kirim'} 
        </button>
      </form>

      {products.length > 0 && (
        <div className="w-full mt-8">
          <h4 className="text-lg font-bold">Produk yang Dikirim</h4>
          <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">No</th>
                <th className="border border-gray-300 px-4 py-2">Product Name</th>
                <th className="border border-gray-300 px-4 py-2">Category</th>
                <th className="border border-gray-300 px-4 py-2">Freshness</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.productName}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.productCategory}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.freshness}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.productPrice}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="text-blue-500 hover:text-blue-700 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContentForm;
