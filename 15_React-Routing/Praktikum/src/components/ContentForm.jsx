import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ContentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
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

  const [submittedProducts, setSubmittedProducts] = useState([]);

  useEffect(() => {
    alert('Welcome');
  }, []);

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'productImage' ? files[0] : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!formData.productName) {
      newErrors.productName = 'Please enter a valid product name.';
    } else if (formData.productName.length > 25) {
      newErrors.productName = 'Product Name must not exceed 25 characters.';
    }

    if (!formData.productCategory) {
      newErrors.category = 'Please select a product category.';
    }

    if (!formData.productImage) {
      newErrors.image = 'Please upload an image.';
    }

    if (!formData.freshness) {
      newErrors.freshness = 'Please select the product freshness.';
    }

    if (!formData.productDescription) {
      newErrors.description = 'Please provide a description.';
    }

    if (!formData.productPrice) {
      newErrors.price = 'Please provide the product price.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newProduct = {
      id: submittedProducts.length + 100,
      name: formData.productName,
      category: formData.productCategory,
      freshness: formData.freshness,
      price: formData.productPrice,
    };

    // Add product to state
    setSubmittedProducts((prev) => [...prev, newProduct]);

    // Call onSubmit function
    onSubmit(newProduct);

    // Reset form after submit
    setFormData({
      productName: '',
      productCategory: '',
      productImage: null,
      freshness: '',
      productDescription: '',
      productPrice: '',
    });

    // Show success alert immediately
    alert('Form submitted successfully!');
  };

  const handleDelete = (id) => {
    setSubmittedProducts((prev) => prev.filter((product) => product.id !== id));

    // Show delete success alert
    alert('Product deleted successfully!');
  };

  const handleEdit = (product) => {
    setFormData({
      productName: product.name,
      productCategory: product.category,
      productImage: null,
      freshness: product.freshness,
      productDescription: '',
      productPrice: product.price,
    });
    handleDelete(product.id);
  };

  return (
    <div className="flex flex-col items-center">
      <form className="space-y-6 w-full max-w-md" onSubmit={handleSubmit}>
        <h4 className="text-xl font-bold mb-4">Detail Product</h4>
        {/* Form Fields */}
        <div className="relative">
          <label htmlFor="productName" className="block mb-2 text-base">Product name</label>
          <input
            type="text"
            id="productName"
            name="productName"
            className="w-full h-9 rounded-md border border-gray-300 p-2 text-black"
            placeholder="Please provide a product name"
            value={formData.productName}
            onChange={handleChange}
            required
          />
          {errors.productName && <p className="mt-1 text-sm text-red-600">{errors.productName}</p>}
        </div>
        <div className="relative">
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
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
            <option value="3">Category 3</option>
          </select>
          {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
        </div>
        <div>
          <label htmlFor="productImage" className="block mb-2 text-base">Image of Product</label>
          <input
            type="file"
            id="productImage"
            name="productImage"
            className="block w-full text-blue-600 border border-[#0D6EFD] rounded-lg file:py-2 file:px-4 file:bg-[#0D6EFD] file:text-white file:border-none file:text-sm hover:file:bg-blue-700"
            onChange={handleChange}
            required
          />
          {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
        </div>
        <div>
          <label className="block mb-2 text-base">Product Freshness</label>
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
                  required
                />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>
          {errors.freshness && <p className="mt-1 text-sm text-red-600">{errors.freshness}</p>}
        </div>
        <div>
          <label htmlFor="productDescription" className="block mb-2 text-base">Additional Description</label>
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
          <label htmlFor="productPrice" className="block mb-2 text-base">Product Price</label>
          <input
            type="number"
            id="productPrice"
            name="productPrice"
            className="w-full p-2 border border-gray-300 rounded-md text-black"
            placeholder="$1"
            value={formData.productPrice}
            onChange={handleChange}
            required
          />
          {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
        </div>
        <button
          type="submit"
          className="text-white py-2 px-4 rounded w-full hover:bg-blue-600"
          style={{ backgroundColor: '#0D6EFD' }}
        >
          Submit
        </button>
      </form>

      {/* Product Table */}
      <div className="mt-8 w-full max-w-md">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">No</th>
              <th className="border border-gray-300 px-4 py-2">Product Name</th>
              <th className="border border-gray-300 px-4 py-2">Product Category</th>
              <th className="border border-gray-300 px-4 py-2">Product Freshness</th>
              <th className="border border-gray-300 px-4 py-2">Product Price</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {submittedProducts.map((product, index) => (
              <tr key={product.id}>
                <td className="border border-gray-300 px-4 py-2">
                  <Link
                    to="/view"
                    state={{
                      product: {
                        ...product,
                        image: formData.productImage ? URL.createObjectURL(formData.productImage) : null,
                        description: formData.productDescription
                      }
                    }}
                    className="text-blue-600 hover:underline"
                  >
                    {index + 1}
                  </Link>
                </td>
                <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                <td className="border border-gray-300 px-4 py-2">{product.freshness}</td>
                <td className="border border-gray-300 px-4 py-2">{product.price}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-green-500 text-white py-1 px-2 rounded hover:bg-yellow-700 ml-2"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentForm;
