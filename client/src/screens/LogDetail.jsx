import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: #F0F7F4;
  margin: 0 auto;
  padding: 10px;
  width: 70%;
  border-radius: 20px;
  color: #705D56;
  font-weight: bold;
  margin: 10px auto;
`;
const StyledPose = styled.div`
  margin: 3px;
  background: #70ABAF;
  display: inline-block;
  padding: 7px;
  border-radius: 10px;
  color: #32292F;
  font-size: small;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 10px;

  button {
    background: #70ABAF;
    width: 25%;
    padding: 5px;
    border-radius: 5px;
    border: none;
  }
  button:hover {
    background: #32292F;
    color: #F0F7F4;
  }
`;

const LogDetail = ({ logs, handleLogDelete }) => {
  const { id } = useParams();
  const history = useHistory();
  const log = logs && logs.find(log => log.id === Number(id))
  const routeChange = (e, id) => {
    e.preventDefault()
    history.push(`/logs/${id}/edit`)
  }

  return (
    <StyledDiv>
      {log &&
        <>
          <p>{new Date(log.created_at).toLocaleString()}</p>
          <p key={log.name}>Notes: {log.description}</p>
          <div>
            <p>
              Poses:
            </p>
            {log.poses ? log.poses.map(pose => (
              <StyledPose key={pose.id}>{pose.name}</StyledPose>
            )) :
            ''}
        </div>
        <ButtonDiv>
            <button onClick={(e) => routeChange(e, log.id)}>Edit</button>
            <button onClick={() => handleLogDelete(log.id)}>Delete</button>
          </ButtonDiv>
        </>
      }
    </StyledDiv>
  );
};

export default LogDetail;