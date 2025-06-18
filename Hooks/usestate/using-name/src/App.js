import React, { useState } from 'react';

function NameForm() {
  const [name, setName] = useState(''); 

  const handleChange = (e) => {
    setName(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert(`Hello, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Enter your name:</h2>
      <input type="text" value={name} onChange={handleChange} />
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default NameForm;
