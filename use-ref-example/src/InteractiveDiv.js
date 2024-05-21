// src/components/InteractiveDiv.js
import React, { useRef } from 'react';

const InteractiveDiv = () => {
  const divRef = useRef(null);

  const changeBackgroundColor = () => {
    divRef.current.style.backgroundColor = divRef.current.style.backgroundColor === 'blue' ? 'green' : 'blue';
  };

  return (
    <div
      ref={divRef}
      onClick={changeBackgroundColor}
      style={{ width: '200px', height: '200px', backgroundColor: 'blue', cursor: 'pointer' }}
    >
      Click me to change color
    </div>
  );
};

export default InteractiveDiv;
