import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css'
import Home from './screens/Home';
import Register from './components/Register';
import Layout from './components/shared/Layout';
import Poses from './screens/Poses';
import Logs from './screens/Logs';
import LogEdit from './screens/LogEdit';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import { getAllPoses } from './services/poses';
import { getAllLogs, postLog, destroyLog } from './services/logs';
import LogCreate from './screens/LogCreate';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [poses, setPoses] = useState([]);
  const [logs, setLogs] = useState([]);
  const history = useHistory();
  

  // handle logs & poses
  useEffect(() => {
    const fetchLogs = async () => {
      const logsData = await getAllLogs();
      setLogs(logsData);
    }
    const fetchPoses = async () => {
      const posesData = await getAllPoses();
      setPoses(posesData);
    }
    fetchLogs();
    fetchPoses();
  }, [])

  // handle create
  const handleLogCreate = async (logData) => {
    const newLog = await postLog(logData);
    setLogs(prevState => ([...prevState, newLog]));
    history.push('/logs')
  }
  // handle delete
  const handleLogDelete = async (id) => {
    await destroyLog(id);
  }

  // handle auth
  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/poses')
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


  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
    }
    handleVerify();
  }, [])

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/register">
            <Register
            handleRegister={handleRegister}/>
          </Route>
          <Route exact path="/poses">
            <Poses
              poses={poses}
            />
          </Route>
          <Route exact path="/logs">
            <Logs
              logs={logs}
              handleLogDelete={handleLogDelete}
            />
          </Route>
          <Route exact path="/logs/new">
            <LogCreate handleLogCreate={handleLogCreate} />
          </Route>

          <Route exact path="/logs/:id/edit">
            <LogEdit poses={poses} />
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