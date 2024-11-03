// src/App.jsx

import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import ContentForm from './components/ContentForm';
import ProductTable from './components/ProductTable';
import Login from './components/Login';
import api from './api/MockApi';

export default function App() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchProducts();
    }
  }, [isLoggedIn]);

  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  const editProductHandler = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
    );
    setEditProduct(null);
  };

  const deleteProduct = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Header />
      <ContentForm onAddProduct={addProduct} onEditProduct={editProductHandler} editProduct={editProduct} />
      <ProductTable products={products} onEdit={setEditProduct} onDelete={deleteProduct} />
    </div>
  );
}
