import React from 'react';
import Toolbar from '../components/Toolbar';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

const Home = () => {
  const handleLogout = () => {
  };

  return (
    <div className="bg-blue-500 min-h-screen">
      <Toolbar onLogout={handleLogout} />
      <div className="container mx-auto mt-8">
        <Header />
        <ProductList />
      </div>
    </div>
  );
};

export default Home;