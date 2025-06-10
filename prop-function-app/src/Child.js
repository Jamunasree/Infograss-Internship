import React from 'react';

const Child = ({ updateMessage }) => {
  return (
    <button onClick={updateMessage}>Click to Update Message</button>
  );
};

export default Child;
