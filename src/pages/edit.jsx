import React, { useState } from 'react';
import Toolbar from '../components/Toolbar';

const EditProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = () => {
  };

  const handleGoBack = () => {
  };

  return (
    <div>
      <Toolbar />
      <div className="p-4 bg-blue-500 min-h-screen">
        <h2 className="text-white text-2xl font-bold mb-4">Edit Product</h2>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Title</label>
          <input type="text" value={title} onChange={handleTitleChange} className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Price</label>
          <input type="text" value={price} onChange={handlePriceChange} className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <button onClick={handleSubmit} className="bg-white text-black px-4 py-2 rounded-lg">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProduct;
