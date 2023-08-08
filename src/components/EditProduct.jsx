import React, { useState } from 'react';
import Toolbar from './Toolbar';
import { useRouter } from 'next/router';
import EditProductComponent from './EditProduct';

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

  return (
    <div>
      <Toolbar />
      <div className="container mx-auto mt-4">
        <h1 className="text-2xl font-semibold mb-4">Edit Product</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Title</label>
            <input type="text" value={title} onChange={handleTitleChange} className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Price</label>
            <input type="text" value={price} onChange={handlePriceChange} className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <button onClick={handleSubmit} className="bg-blue-500 text-white font-semibold px-4 py-2 mt-4 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;