import React, { useState } from 'react';
import Toolbar from './Toolbar.jsx';

const AddNewProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Product Title:', title);
    console.log('Product Price:', price);
    // Reset form
    setTitle('');
    setPrice('');
  };

  return (
    <div className="bg-blue-500 min-h-screen">
      <Toolbar /> {/* Include the Toolbar component */}
      <div className="container mx-auto mt-8">
        <h2 className="text-white text-2xl font-bold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-white text-sm font-bold mb-2">
              Product Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handleTitleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-white text-sm font-bold mb-2">
              Product Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={price}
              onChange={handlePriceChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <button type="submit" className="bg-white text-black px-4 py-2 rounded-lg">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewProduct;