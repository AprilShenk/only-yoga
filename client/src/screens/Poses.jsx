import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// const PoseDiv = styled.div`
//   background: #F0F7F4;
//   padding 15px;
//   width: 85%;
//   margin: 0 auto;
//   border-radius: 10px;
//   color: #705D56;
//   font-weight: bold;
//   margin: 15px;
// `;

const ImageDiv = styled.div`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  margin: 0 auto;
  background-position: center;
  background-size: cover;
`;

const Poses = (props) => {
  const { poses } = props;
  return (
    <div>
      <h2>Poses</h2>
      {
        poses.map(pose => (
          <Link to={`/poses/${pose.id}`} key={pose.id}>
            <ImageDiv
              role="img"
              alt={pose.name}
              style={{ backgroundImage: `url("${pose.image}")` }}
            />
            <h4>{pose.name}</h4>
            {/* <p>{pose.description}</p> */}
          </Link>
        ))
      }
    </div>
  );
};

export default Poses;