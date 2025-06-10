import React, { useState } from 'react';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState('');

  const handleLogin = () => {
    if (name.trim() !== '') {
      setLoggedIn(true);
    } else {
      alert('Please enter your name');
    }
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {loggedIn ? (
        <h2>Welcome, {name}! 👋</h2>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: '8px', marginRight: '10px' }}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}
export default App;
