import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <h2 className="text-white text-2xl font-bold pl-4">Products</h2>
      <button className="bg-white text-blue-500 font-semibold px-4 py-2 mr-4">Add New Product</button>
    </div>
  );
};

export default Header;
