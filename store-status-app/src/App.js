import React from 'react';

function App() {
  const isStoreOpen = true;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Store Status: {isStoreOpen ? 'Open 🟢' : 'Closed 🔴'}</h1>
    </div>
  );
}

export default App;
