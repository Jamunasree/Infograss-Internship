import React, { useState } from 'react';
import Child from './Child';

function App() {
  const [message, setMessage] = useState('Hello from Parent');

  const changeMessage = () => {
    setMessage('Message updated from Child!');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>{message}</h2>
      <Child updateMessage={changeMessage} />
    </div>
  );
}

export default App;
