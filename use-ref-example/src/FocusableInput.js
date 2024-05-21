// src/components/FocusableInput.js
import React, { useEffect, useRef } from 'react';

const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="I am focused automatically" />
    </div>
  );
};

export default FocusableInput;
