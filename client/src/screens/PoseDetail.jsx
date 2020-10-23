import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const PoseDiv = styled.div`
  background: #F0F7F4;
  padding 15px;
  width: 85%;
  margin: 0 auto;
  border-radius: 10px;
  color: #705D56;
  font-weight: bold;
`;

const ImageDiv = styled.div`
  border-radius: 50%;
  height: 280px;
  width: 280px;
  margin: 0 auto;
  background-position: center;
  background-size: cover;
`;

const PoseDetail = ({ poses, currentUser }) => {
  
  const { id } = useParams();
  const pose = poses.find(pose => pose.id === Number(id))
  return (
    <div>
      {pose && <h2>{pose.name}</h2>}
      {(pose && currentUser) ? 
        <PoseDiv key={pose.id}>
            <ImageDiv
              role="img"
              alt={pose.name}
              style={{ backgroundImage: `url("${pose.image}")` }}
            />
            
            <p>{pose.description}</p>
        </PoseDiv> 
        :
        <p>Please log into see details</p>
      }
    </div>

  );
};

export default PoseDetail;