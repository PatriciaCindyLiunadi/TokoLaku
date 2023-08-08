import React from 'react';
import Product from './Product';

const products = [
  { name: 'Iphone 9', price: '549', image: "/iphone9.jpeg" },
  { name: 'Ipone X', price: '899', image: "/iphonex.jpg" },
  { name: 'Samsung Universe 9', price: '1249', image: "/samsunguniverse9.jpg" },
  { name: 'Oppo F19', price: '280', image: "/oppof19.png" },
  { name: 'Huawei P30', price: '499', image: "/huaweip30.jpg" },
  { name: 'Macbook Pro', price: '1749', image: "/macbookpro.jpg" },
  { name: 'Samsung Galaxy Book', price: '1499', image: "/samsunggalaxybook.jpg" },
  { name: 'Microsoft Surface Laptop 4', price: '1499', image: "/microsoftsurfacelaptop4.jpg" },
  { name: 'Infinix Inbook', price: '1099', image: "/infinixinbook.png" },
  { name: 'HP Pavilion 15 - DK1056WM', price: '1099', image: "/hppavilion15.jpg" },
];

const ProductList = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <Product key={index} name={product.name} price={product.price} image={product.image} />
        ))}
      </div>
    );
  };

export default ProductList;