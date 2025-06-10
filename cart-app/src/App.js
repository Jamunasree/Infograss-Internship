import React, { useState } from 'react';

function App() {
  const [cart, setCart] = useState([
    { name: '', price: 0, quantity: 1 },
  ]);

  const handleChange = (index, field, value) => {
    const updatedCart = [...cart];
    updatedCart[index][field] = field === 'name' ? value : parseFloat(value);
    setCart(updatedCart);
  };

  const addItem = () => {
    setCart([...cart, { name: '', price: 0, quantity: 1 }]);
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const discount = subtotal > 500 ? 0.1 * subtotal : 0;
    const finalTotal = subtotal - discount;
    return { subtotal, discount, finalTotal };
  };

  const { subtotal, discount, finalTotal } = calculateTotal();

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>🛒 Shopping Cart Calculator</h2>

      {cart.map((item, index) => (
        <div key={index} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
          <input
            type="text"
            placeholder="Enter item name"
            value={item.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
            style={{ marginRight: '10px' }}
          />
          <input
            type="number"
            value={item.price}
            onChange={(e) => handleChange(index, 'price', e.target.value)}
            placeholder="Price"
            style={{ marginRight: '10px', width: '80px' }}
          />
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleChange(index, 'quantity', e.target.value)}
            placeholder="Qty"
            style={{ width: '60px' }}
          />
        </div>
      ))}

      <button onClick={addItem} style={{ marginBottom: '20px' }}>➕ Add Item</button>

      <h3>Subtotal: ₹{subtotal.toFixed(2)}</h3>
      <h4 style={{ color: discount > 0 ? 'green' : 'gray' }}>
        {discount > 0 ? `🎉 Discount (10%): ₹${discount.toFixed(2)}` : 'No discount applied'}
      </h4>
      <h2>Total: ₹{finalTotal.toFixed(2)}</h2>
    </div>
  );
}
export default App;
