import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>

      <p>{`count: ${count}`}</p>

      <button onClick={(e)=>{setCount(count + 1)}}>Increment</button>
      <button onClick={(e)=>{setCount(count - 1)}}>Decrement</button>

    </div>
  );
}

export default App;
