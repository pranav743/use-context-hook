import React, { useState } from 'react';

const CounterApp: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Counter App</h1>
      <div style={{ margin: '20px 0' }}>
        <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{count}</span>
      </div>
      <div>
        <button 
          onClick={decrement} 
          style={{ margin: '0 10px', padding: '8px 16px' }}
        >
          Decrement
        </button>
        <button 
          onClick={increment} 
          style={{ margin: '0 10px', padding: '8px 16px' }}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
