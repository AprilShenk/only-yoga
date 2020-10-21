import React, { useState } from 'react';

const LogCreate = (props) => {
  const [formData, setFormData] = useState({
    description: ''
  })
  const { handleLogCreate } = props;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ [name]: value })
  }
  return (
    <form onSubmit={e => {
      e.preventDefault();
      handleLogCreate(formData);
    }}>
      <h3>Create Log</h3>
      <label>
        Notes: 
         <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          />
      </label>
      <button>Add</button>
    </form>
  );
};

export default LogCreate;