import React, { useState, useEffect } from 'react';
import './Task6.css'

const Task6 = () => {
  
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    
    return () => {
      clearInterval(intervalId);
    };
  }, []); 
  return (
    <div className='body'>
      <h2>Task 6</h2>
      <h2>Current Time:</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Task6;
