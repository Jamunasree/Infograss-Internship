import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2> Login Control</h2>
      {isLoggedIn ? (
        <>
          <h3>Welcome, User!!</h3>
          <button onClick={toggleLogin}>Logout</button>
        </>
      ) : (
        <>
          <h3>Please log in to continue.</h3>
          <button onClick={toggleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export default App;

