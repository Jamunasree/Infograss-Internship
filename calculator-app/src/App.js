import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);
  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Please enter valid numbers');
      return;
    }

    let res;
    switch (operator) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        res = n2 !== 0 ? n1 / n2 : 'Cannot divide by zero';
        break;
      default:
        res = 'Invalid operator';
    }

    setResult(res);
  };

  return (
    <div style={styles.container}>
      <h1>Simple Calculator</h1>

      {/* Inputs */}
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={styles.input}
      />

      <select
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
        style={styles.select}
      >
        <option value="+">+</option>
        <option value="-">−</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={styles.input}
      />

      {/* Button */}
      <button onClick={calculate} style={styles.button}>
        Calculate
      </button>

      {/* Result */}
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
}
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial'
  },
  input: {
    padding: '10px',
    margin: '10px',
    width: '150px',
    fontSize: '16px'
  },
  select: {
    padding: '10px',
    margin: '10px',
    fontSize: '16px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    marginTop: '20px'
  }
};

export default App;
