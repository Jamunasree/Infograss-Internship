import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: theme === 'light' ? '#fff' : '#222',
        color: theme === 'light' ? '#000' : '#fff',
        textAlign: 'center',
      }}
    >
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemedComponent;
