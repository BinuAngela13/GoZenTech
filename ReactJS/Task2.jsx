import React, { useState } from 'react';
import './Task2.css'

const Task2 = () => {
  
  const [count, setCount] = useState(0);

  
  const increment = () => {
    setCount(count + 1);
  };

  
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='body'>
        <h2>Task 2</h2>

      <h2>Value: {count}</h2>
      {/* increment */}
      <button className='button' onClick={increment}>Increase</button>

      {/* decrement */}
      <button className='button' onClick={decrement}>Decrease</button>
    </div>
  );
};

export default Task2;
