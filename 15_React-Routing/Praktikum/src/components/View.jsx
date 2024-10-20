import React from 'react';
import { useLocation } from 'react-router-dom';

const View = () => {
  const { state } = useLocation();
  const { product } = state;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      <div className="max-w-lg w-full p-4 border rounded-lg shadow-lg">
        <p><strong>Product Name:</strong> {product.name}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Freshness:</strong> {product.freshness}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>

        {/* Display the product image */}
        {product.image && (
          <div className="mt-4">
            <strong>Product Image:</strong>
            <img src={product.image} alt={product.name} className="w-full mt-2 rounded-md" />
          </div>
        )}
      </div>
    </div>
  );
};

export default View;
