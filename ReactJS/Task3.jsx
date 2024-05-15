import React, { useState } from 'react';
import './Task3.css'

const Task3 = () => {
  
  const [showContent, setShowContent] = useState(false);

  
  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className='body'>
      <h2>Task 3</h2>
      <h2>Conditional Rendering</h2>
      <button className='button' onClick={toggleContent}>
        {showContent ? 'Hide ' : 'Show '}
      </button>



      {showContent && (
        <div>
          <p>GoZen Technologies</p>
        </div>
      )}
    </div>
  );
};

export default Task3;
