import React from 'react';

const Product = ({ name, price }) => {
  return (
    <div className="bg-blue-800 p-4 rounded-lg shadow-lg text-white w-64">
      <div className="h-32 w-32 bg-gray-300 rounded-lg overflow-hidden mx-auto mb-4">
        <img src="path/to/your/image.jpg" alt="Product" className="h-full w-full object-cover" />
      </div>
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-lg mb-4">Rp. {price}</p>
      <div className="flex justify-between">
        <button className="bg-white text-blue-500 font-semibold px-4 py-2 mr-2">Edit</button>
        <button className="bg-white text-red-500 font-semibold px-4 py-2">Remove</button>
      </div>
    </div>
  );
};

export default Product;
