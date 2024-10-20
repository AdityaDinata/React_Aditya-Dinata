import React from 'react';
import HeaderProduct from './headerProduct';
import ContentForm from './ContentForm';
import IconProduct from './iconProduct';

const CreateProduct = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white"> 
      <HeaderProduct />
      <IconProduct />
      <ContentForm /> 
    </main>
  );
};

export default CreateProduct;
