import React, { useState, useEffect } from 'react';

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
  const [imagePreview, setImagePreview] = useState(null); // For image preview

  useEffect(() => {
    alert('Welcome');
  }, []);

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === 'productImage') {
      const file = files[0];
      setFormData((prev) => ({ ...prev, [name]: file }));
      setImagePreview(URL.createObjectURL(file)); // Preview the image
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateImage = (image) => {
    const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if (!allowedExtensions.exec(image.name)) {
      return 'Please upload a valid image (.jpg, .jpeg, .png).';
    }
    return '';
  };

const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    // (Validation code here...)

    // If any validation errors, set errors state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newProduct = {
      id: submittedProducts.length + 100,
      name: formData.productName,
      category: formData.productCategory,
      image: imagePreview, // Save image preview URL
      freshness: formData.freshness,
      description: formData.productDescription,
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

    setImagePreview(null); // Clear image preview


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
          {imagePreview && <img src={imagePreview} alt="Product Preview" className="mt-2 w-32 h-32 object-cover"/>}
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
          Submit
        </button>
      </form>

      {submittedProducts.length > 0 && (
        <div className="w-full mt-8">
          <h4 className="text-lg font-bold">Submitted Products</h4>
          <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">No</th>
                <th className="border border-gray-300 px-4 py-2">Product Name</th>
                <th className="border border-gray-300 px-4 py-2">Category</th>
                <th className="border border-gray-300 px-4 py-2">Image</th>
                <th className="border border-gray-300 px-4 py-2">Freshness</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {submittedProducts.map((product) => (
                <tr key={product.id}>
                  <td className="border border-gray-300 px-4 py-2">{product.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{product.freshness}</td>
                  <td className="border border-gray-300 px-4 py-2">${product.price}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="bg-red-600 text-white py-1 px-2 rounded"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
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
