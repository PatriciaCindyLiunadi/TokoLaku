import React from 'react';
import Product from './src/pages/Product';

const products = [
  { name: 'Iphone 9', price: '549' },
  { name: 'Ipone X', price: '899' },
  { name: 'Samsung Universe 9', price: '1249' },
  // Add other products here
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <Product key={index} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default ProductList;
