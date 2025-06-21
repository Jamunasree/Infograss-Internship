import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <br /><br />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
