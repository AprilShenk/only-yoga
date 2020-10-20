import React from 'react';

const Poses = (props) => {
  const { poses } = props;
  return (
    <div>
      <h2>Poses</h2>
      {
        poses.map(pose => (
          <div key={pose.id}>
            <img src={pose.image} />
            <h4>{pose.name}</h4>
            <p>{pose.description}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Poses;