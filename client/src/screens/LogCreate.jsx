import React, { useState } from 'react';

const LogCreate = (props) => {
  const [formData, setFormData] = useState({
    description: '',
    poses: []
  })
  const { handleLogCreate, poses } = props;
// redirecting before state updated in parent
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handlePoseChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, ...formData[name].push(parseInt(value)) })
  }

  const currentPoses = poses.filter(pose => formData.poses.includes(pose.id))
  console.log(currentPoses);
  return (
    <>
    <h3>Create Log</h3>
    <form onSubmit={e => {
      e.preventDefault();
      handleLogCreate(formData);
    }}>
      <select defaultValue='default' name='poses' onChange={handlePoseChange}>
        <option disabled value='default'>-- Select a pose --</option>
        {poses.map(pose => (
          <option value={pose.id} key={pose.id}>{pose.name}</option>
        ))}
      </select>
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
      {currentPoses.map(pose => (
        <p key={pose.id}>{pose.name}</p>
      ))}
      </>
  );
};

export default LogCreate;