import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <h2 className="text-white text-2xl font-bold pl-4">Products</h2>
      <Link href="/add-new-product">
        <div className="bg-blue-300 text-white font-semibold px-4 py-2 rounded-lg cursor-pointer">
          Add New Product
        </div>
      </Link>
    </div>
  );
};

export default Header;