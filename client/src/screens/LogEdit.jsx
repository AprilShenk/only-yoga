import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    setFormData({
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
  }

  const currentPoses = poses.filter(pose => sendData.poses.includes(pose.id))


  return (
    <>
      <h3>Edit Log</h3>
      <div>Poses: {
        formData.poses && formData.poses.map(pose => (
          <p key={pose.id}>{pose.name}</p>
        ))
      }
      </div>
    <form onSubmit={handleSubmit}>
      <select defaultValue='default' name='poses' onChange={handlePoseChange}>
        <option disabled value='default'>-- Select a pose --</option>
        {poses.map(pose => (
          <option value={pose.id} key={pose.id}>{pose.name}</option>
        ))}
      </select>
      <label>
        Notes:
         <input
          type="textarea"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <button>Save</button>
    </form>
    {currentPoses.map(pose => (
        <p key={pose.id}>{pose.name}</p>
      ))}
    </>
  )
};

export default LogEdit;