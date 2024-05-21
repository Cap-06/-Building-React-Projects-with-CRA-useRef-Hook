// src/components/UncontrolledInput.js
import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(null);

  const handleInput = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" onChange={handleInput} placeholder="Type something..." />
      <p>Current value: {inputRef.current?.value}</p>
    </div>
  );
};

export default UncontrolledInput;
