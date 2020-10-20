import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  width: 100%;
  height: 60%;
  button {
    width: 30%;
    margin: 0 auto;
  }
  div {
    width: 80%;
    margin: 0 auto 15px;
    * {
      display: flex;
      justify-content: space-between;
    }
    input {
      background: #F0F7F4;
      border: none;
      border-radius: 5px;
    }
  }
`;

const Login = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const { username, password } = formData;
  const { error, handleLogin } = props;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <StyledForm onSubmit={(e)=>{
      e.preventDefault();
      handleLogin(formData);
    }}>
      <h3>Login</h3>
      {
        error &&
        <p>{error}</p>
      }
      <div>
        <label>
          Username:&nbsp;
          <input
            type="text"
            value={username}
            name="username"
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Password:&nbsp;
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </label>
      </div>
      
      <button>Login</button>
      <p>If you do not have an account please&nbsp; 
        <Link to='/register'>register here</Link>
      </p>
    </StyledForm>
  )
};

export default Login;
