import React from 'react';
import Toolbar from './src/pages/Toolbar';
import Header from './src/pages/Header';
import ProductList from './ProductList';

function App() {
  return (
    <div className="bg-blue-500 min-h-screen">
      <Toolbar />
      <div className="container mx-auto mt-8">
        <Header />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
