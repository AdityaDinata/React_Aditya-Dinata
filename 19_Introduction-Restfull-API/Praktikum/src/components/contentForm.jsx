import React, { useState, useEffect } from 'react';
import api from '../api/MockApi';

const contentForm = ({ onAddProduct, onEditProduct, editProduct }) => {
  const [formData, setFormData] = useState({
    productName: '',
    productCategory: '',
    productImage: '',
    freshness: '',
    productDescription: '',
    productPrice: '',
  });

  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    if (editProduct) {
      setFormData(editProduct);
      setImagePreview(editProduct.productImage);
    }
  }, [editProduct]);

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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.productName) newErrors.productName = 'Product name is required';
    if (!formData.productCategory) newErrors.productCategory = 'Product category is required';
    if (!formData.productImage) newErrors.productImage = 'Product image is required';
    if (!formData.freshness) newErrors.freshness = 'Product freshness is required';
    if (!formData.productDescription) newErrors.productDescription = 'Product description is required';
    if (!formData.productPrice || isNaN(formData.productPrice)) newErrors.productPrice = 'Valid product price is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const productData = {
      ...formData,
      productPrice: parseFloat(formData.productPrice),
    };

    try {
      if (editProduct) {
        await api.put(`/products/${editProduct.id}`, productData);
        onEditProduct({ ...productData, id: editProduct.id });
      } else {
        const response = await api.post('/products', productData);
        onAddProduct(response.data);
      }
      alert('Product saved successfully!');

      // Reset form
      setFormData({
        productName: '',
        productCategory: '',
        productImage: '',
        freshness: '',
        productDescription: '',
        productPrice: '',
      });
      setImagePreview('');
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form className="space-y-6 w-full max-w-md" onSubmit={handleSubmit}>
        <h4 className="text-xl font-bold mb-4">Product Details</h4>

        <div>
          <label htmlFor="productName" className="block mb-2 text-base">Product Name</label>
          <input
            type="text"
            id="productName"
            name="productName"
            className="w-full h-9 rounded-md border border-gray-300 p-2 text-black"
            placeholder="Enter product name"
            value={formData.productName}
            onChange={handleChange}
            required
          />
          {errors.productName && <p className="mt-1 text-sm text-red-600">{errors.productName}</p>}
        </div>

        <div>
          <label htmlFor="productCategory" className="block mb-2 text-base">Product Category</label>
          <select
            id="productCategory"
            name="productCategory"
            className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md text-black"
            value={formData.productCategory}
            onChange={handleChange}
            required
          >
            <option value="">Choose...</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Food">Food</option>
          </select>
          {errors.productCategory && <p className="mt-1 text-sm text-red-600">{errors.productCategory}</p>}
        </div>

        <div>
          <label htmlFor="productImage" className="block mb-2 text-base">Product Image</label>
          <input
            type="file"
            id="productImage"
            name="productImage"
            className="block w-full border border-gray-300 p-2"
            onChange={handleChange}
            required
          />
          {imagePreview && <img src={imagePreview} alt="Product Preview" className="mt-2 w-32 h-32 object-cover" />}
          {errors.productImage && <p className="mt-1 text-sm text-red-600">{errors.productImage}</p>}
        </div>

        <div>
          <label htmlFor="freshness" className="block mb-2 text-base">Product Freshness</label>
          <div className="space-y-2">
            {['Brand New', 'Second Hand', 'Refurbished'].map((item) => (
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
          <label htmlFor="productDescription" className="block mb-2 text-base">Product Description</label>
          <textarea
            id="productDescription"
            name="productDescription"
            className="w-full p-2 border border-gray-300 rounded text-black"
            rows="3"
            value={formData.productDescription}
            onChange={handleChange}
            required
          ></textarea>
          {errors.productDescription && <p className="mt-1 text-sm text-red-600">{errors.productDescription}</p>}
        </div>

        <div>
          <label htmlFor="productPrice" className="block mb-2 text-base">Product Price</label>
          <input
            type="number"
            id="productPrice"
            name="productPrice"
            className="w-full h-9 rounded-md border border-gray-300 p-2 text-black"
            placeholder="Enter price"
            value={formData.productPrice}
            onChange={handleChange}
            required
          />
          {errors.productPrice && <p className="mt-1 text-sm text-red-600">{errors.productPrice}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
        >
          {editProduct ? 'Update Product' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default contentForm;
