import React from 'react';
import styled from 'styled-components';

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

const Logs = ({ logs }) => {

  const logsJSX = 
    logs.map(log => (
      <StyledDiv key={log.id}>
        <h6>{new Date(log.created_at).toLocaleString()}</h6>
        <p>Poses: {log.poses[0].name}</p>
        <p>Notes: {log.description}</p>
        <ButtonDiv>
          <button>Edit</button>
          <button>Delete</button>
        </ButtonDiv>
        
      </StyledDiv>
    ))
  

  return (
    <div>
      <h2>Logs</h2>
        {logsJSX}
    </div>
  );
};

export default Logs;