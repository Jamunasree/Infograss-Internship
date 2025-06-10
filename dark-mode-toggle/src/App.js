import React, { useState } from 'react';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  const appStyle = {
    height: '100vh',
    backgroundColor: darkMode ? '#121212' : '#ffffff',
    color: darkMode ? '#ffffff' : '#000000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.5s ease',
  };
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    marginTop: '20px',
    cursor: 'pointer',
  };
  return (
    <div style={appStyle}>
      <h1>{darkMode ? '🌙 Dark Mode' : '🌞 Light Mode'}</h1>
      <button onClick={toggleMode} style={buttonStyle}>
        Toggle Mode
      </button>
    </div>
  );
}
export default App;
