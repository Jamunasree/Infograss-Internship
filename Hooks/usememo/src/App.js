import React, { useState, useMemo } from 'react';

function ExpensiveCalculator() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const expensiveValue = useMemo(() => {
    console.log('Running expensive calculation...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result + count;
  }, [count]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Expensive Calculation Result: {expensiveValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <br /><br />
      <input
        type="text"
        value={input}
        placeholder="Type something..."
        onChange={(e) => setInput(e.target.value)}
      />
      <p>You typed: {input}</p>
    </div>
  );
}

export default ExpensiveCalculator;
