import React from 'react';
import Login from '../components/Login'

const Home = ({ currentUser, handleLogin, handleLogout }) => {
  return (
    <div>
      <Login
        currentUser={currentUser}
        handleLogout={handleLogout}
        handleLogin={handleLogin}
      />
    </div>
  );
};

export default Home;