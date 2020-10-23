import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

const LogEdit = ({ logs, handleLogEdit, poses }) => {
  const [formData, setFormData] = useState({
    description: '',
    poses: []
  });
  const [sendData, setSendData] = useState({
    description: '',
    poses: []
  })
  const { id } = useParams();

  useEffect(() => {
    const fillFormData = () => {
      const { description, poses } = logs.find(log => log.id === Number(id));
      setFormData({
        description, 
        poses
      });
      const poseIds = poses.map(pose => pose.id)
      setSendData({
        description, 
        poses: poseIds
      });
    }
    if (logs.length) {
      fillFormData()
    }
  }, [logs, id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLogEdit(id, sendData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setSendData({
      ...sendData,
      [name]: value
    })
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handlePoseChange = e => {
    const { name, value } = e.target;
    setSendData({
      ...sendData,
      ...sendData[name].push(parseInt(value)), 
      description: formData.description
    })
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handlePoseRemove = (e) => {
    const removePose = currentPoses.find(pose => pose.id === parseInt(e.target.value))
    const poseArr = [...sendData.poses]
    poseArr.splice(poseArr.indexOf(removePose.id), 1)
    setSendData({
      ...sendData,
      poses: poseArr,
      description: formData.description
    })
  }
  

  const currentPoses = poses.filter(pose => sendData.poses.includes(pose.id))


  return (
    <StyledDiv>
      <h3>Edit Log</h3>

    <form onSubmit={handleSubmit}>
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
      <button>Save</button>
      </form>
      <div>
        Poses: 
        {currentPoses.map(pose => (
          <p key={pose.id}>{pose.name}
            <button onClick={handlePoseRemove} value={pose.id}>-</button>
          </p>
          ))}
      </div>
    </StyledDiv>
  )
};

export default LogEdit;