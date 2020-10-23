import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
  background: #F0F7F4;
  margin: 0 auto;
  padding: 10px;
  width: 70%;
  border-radius: 20px;
  color: #705D56;
  font-weight: bold;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
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

const StyledLink = styled(Link)`
  background: #70ABAF;
  width: 25%;
  border-radius: 5px;
  border: none;
  button {
    background: #70ABAF;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: none;
  }
  button:hover {
    background: #32292F;
    color: #F0F7F4;
  }
`;

const Logs = ({ logs, handleLogDelete, currentUser }) => {

  const userLogs = (logs && currentUser) && logs.filter(log => log.user_id === currentUser.id)

  const logsJSX = 
    userLogs && userLogs.map(log => (
      <StyledDiv key={log.id}>
        <h6>{new Date(log.created_at).toLocaleString()}</h6>
        <div>
          Poses: {log.poses ? log.poses.map(pose => (
          <p key={pose.id}>{pose.name}</p>
        )) :
        ''}
        </div>
        
        <p>Notes: {log.description}</p>
        <ButtonDiv>
          <StyledLink to={`/logs/${log.id}/edit`}><button>Edit</button></StyledLink>
          
          <button onClick={() => handleLogDelete(log.id)}>Delete</button>
        </ButtonDiv>
        
      </StyledDiv>
    ))
  

  return (
    <div>
      <h2>Logs</h2>
      {
        !currentUser ?
          <p>Please log in to view logs</p>
          :
          <>
          <Link to='/logs/new'>
            <div>
              Add
            </div>
          </Link>
          <div>
            {logsJSX}
          </div>
            </>
      }
      
    </div>
  );
};

export default Logs;