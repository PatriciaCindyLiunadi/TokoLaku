import React, { useState } from 'react';
import Link from 'next/link';

const Product = ({ name, price, image }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleRemoveClick = () => {
    setPopupVisible(true);
  };

  const handleConfirmRemove = () => {
    setPopupVisible(false);
  };

  const handleCancelRemove = () => {
    setPopupVisible(false);
  };

  return (
    <div className="bg-blue-800 p-4 rounded-lg shadow-lg text-white w-64">
      <div className="h-32 w-32 bg-gray-300 rounded-lg overflow-hidden mx-auto mb-4">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-lg mb-4">Rp. {price}</p>
      <div className="flex justify-between">
        <Link href="/edit">
          <button className="bg-white text-blue-500 font-semibold px-4 py-2 mr-2 rounded-lg">Edit</button>
        </Link>
        <button onClick={handleRemoveClick} className="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg">
          Remove
        </button>
      </div>

      {isPopupVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-black font-semibold mb-2">Remove Product</p>
            <p className="text-black mb-4">Are you sure you want to delete? If you remove, it will be permanently lost.</p>
            <div className="mt-4 flex justify-end">
              <button onClick={handleCancelRemove} className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2">
                Cancel
              </button>
              <button onClick={handleConfirmRemove} className="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;