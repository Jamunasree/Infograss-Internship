import React from 'react';
import './App.css'; 

const users = [
  { id: 1, name: 'Jamunasree', role: 'admin' },
  { id: 2, name: 'Moses', role: 'user' },
  { id: 3, name: 'Gowsi', role: 'guest' },
  { id: 4, name: 'Hemanth', role: 'user' },
  { id: 5, name: 'Sree', role: 'admin' }
];

function App() {
  return (
    <div style={{ padding: '30px' }}>
      <h2>User Role Buttons</h2>

      {users.map((user) => (
        <button
          key={user.id}
          style={{
            margin: '10px',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            color: 'white',
            backgroundColor:
              user.role === 'admin'
                ? '#d32f2f'
                : user.role === 'user'
                ? '#1976d2'
                : '#616161' 
          }}
        >
          {user.name} ({user.role})
        </button>
      ))}
    </div>
  );
}

export default App;
