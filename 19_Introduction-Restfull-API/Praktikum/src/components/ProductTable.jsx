import React from 'react';

const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Category</th>
          <th className="border border-gray-300 px-4 py-2">Price</th>
          <th className="border border-gray-300 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="border border-gray-300 px-4 py-2">{product.productName}</td>
            <td className="border border-gray-300 px-4 py-2">{product.productCategory}</td>
            <td className="border border-gray-300 px-4 py-2">${product.productPrice}</td>
            <td className="border border-gray-300 px-4 py-2">
              <button onClick={() => onEdit(product)} className="text-blue-600">Edit</button>
              <button onClick={() => onDelete(product.id)} className="text-red-600 ml-2">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
