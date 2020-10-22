import React from 'react';
import Login from '../components/Login';

const Home = ({ currentUser, handleLogin, handleLogout }) => {
  return (
    <div>
      <h1>Only Yoga</h1>
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