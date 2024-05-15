import React, { useState } from 'react';
import './Task4.css'

const Task4 = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = (event) => {
    {/* event.preventDefault(); */}
    console.log('Form submitted:', formData);
  };

  return (
  
    <form className="form" onSubmit={handleSubmit}>
        <h2>Task 4</h2>
      <div className='div'>
        <label className='label'>Name:</label>
        <input
          className='input'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className='div'>
        <label className='label'>Email:</label>
        <input
          className='input'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
    
      <div className='div'>
        <label className='label'>Age:</label>
        <input
          className='input'
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      
      <button className="button" type="submit">Submit</button>
    </form>
  );
};

export default Task4;
