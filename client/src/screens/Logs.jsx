import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

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

const DetailLink = styled(Link)`
  text-decoration: none;
  z-index: -1;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #32292F;

  .add {
    background: #70ABAF;
    width: 10%;
    padding: 5px 5px 7px;
    margin: 0 auto;
    border-radius: 10%;
  }
  .add:hover {
    background: #32292F;
    color: #F0F7F4;
  }
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

const Logs = ({ logs, handleLogDelete, currentUser }) => {
  const history = useHistory();

  const routeChange = (e, id) => {
    e.preventDefault()
    history.push(`/logs/${id}/edit`)
  }

  const userLogs = (logs && currentUser) && logs.reverse().filter(log => log.user_id === currentUser.id)

  const logsJSX = 
    userLogs && userLogs.map(log => (
      <DetailLink to={`/logs/${log.id}`} key={log.id}>
        <StyledDiv>
          <h6>{new Date(log.created_at).toLocaleString()}</h6>
          <div>
            <p>
              Poses:
            </p>
             {log.poses ? log.poses.map(pose => (
              <StyledPose key={pose.id}>{pose.name}</StyledPose>
            )) :
            ''}
          </div>
          
          <p>Notes: {log.description}</p>
          <ButtonDiv>
            <button onClick={(e) => routeChange(e, log.id)}>Edit</button>
            <button onClick={() => handleLogDelete(log.id)}>Delete</button>
          </ButtonDiv>
        </StyledDiv>
      </DetailLink>
      
    ))
  

  return (
    <div>
      <h2>Logs</h2>
      {
        !currentUser ?
          <p>Please log in to view logs</p>
          :
          <>
            <StyledLink to='/logs/new'>
              <div className="add">
                +                
              </div>
            </StyledLink>
            {logsJSX}
          </>
      }
      
    </div>
  );
};

export default Logs;