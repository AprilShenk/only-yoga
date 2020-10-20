import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css'
import Home from './screens/Home';
import Register from './components/Register';
import Layout from './components/shared/Layout';
import Poses from './screens/Poses';
import Logs from './screens/Logs';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
    }
    handleVerify();
  }, [])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/register">
            <Register
            handleRegister={handleRegister}/>
          </Route>
          <Route exact path="/poses">
            <Poses />
          </Route>
          <Route exact path="/logs">
            <Logs />
          </Route>
          <Route exact path="/">
            <Home
              currentUser={currentUser}
              handleLogout={handleLogout}
              handleLogin={handleLogin}
            />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};

export default App;