// src/App.js
import React from 'react';
import FocusableInput from './FocusableInput';
import UncontrolledInput from './UncontrolledInput';
import InteractiveDiv from './InteractiveDiv';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>useRef Hook Examples</h1>
      <h2>Focusable Input</h2>
      <FocusableInput />
      <h2>Uncontrolled Input</h2>
      <UncontrolledInput />
      <h2>Interactive Div</h2>
      <InteractiveDiv />
    </div>
  );
}

export default App;
