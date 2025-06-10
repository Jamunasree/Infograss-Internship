import React from 'react';
import ProductList from './ProductList';

function App() {
  const products = [
    { id: 1, name: 'Laptop', price: 40000 },
    { id: 2, name: 'Mobile', price: 15000 },
    { id: 3, name: 'Headphones', price: 2000 },
  ];

  return (
    <div>
      <h1>🛍️ Product List</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
