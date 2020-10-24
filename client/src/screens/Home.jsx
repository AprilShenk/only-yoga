import React from 'react';
import Login from '../components/Login';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  font-family: 'Satisfy', cursive;
  font-size: 70px;
`;


const Home = ({ currentUser, handleLogin, handleLogout }) => {
  return (
    <div>
      <StyledHeader>Only Yoga</StyledHeader>
      {
        currentUser ? 
        <button onClick={handleLogout}>Logout</button>
          :
          <Login
            currentUser={currentUser}
            handleLogout={handleLogout}
            handleLogin={handleLogin}
          />
      }
    </div>
  );
};

export default Home;