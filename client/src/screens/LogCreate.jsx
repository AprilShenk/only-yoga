import React, { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    button {
      margin: 20px auto;
    }

    select {
      width: 250px;
      margin: 0 auto 20px;
    }

    textarea {
      height: 200px;
      width: 250px;
    }
  }
`;

const LogCreate = (props) => {
  const [formData, setFormData] = useState({
    description: '',
    poses: []
  })
  const { handleLogCreate, poses } = props;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handlePoseChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, ...formData[name].push(parseInt(value)) })
  }

  const currentPoses = poses.filter(pose => formData.poses.includes(pose.id))
  
  return (
    <StyledDiv>
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
             <br></br>
         <textarea
          type="textarea"
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
      </StyledDiv>
  );
};

export default LogCreate;