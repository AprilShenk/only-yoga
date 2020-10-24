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
    input {
      height: 2rem;
      background: #F0F7F4;
      border: none;
      border-radius: 5px;
      text-align: center;
      font-size: larger;
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
          <input
            type="text"
            value={username}
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
      </div>
      <div>
          <input
            type="password"
            value={password}
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
      </div>
      
      <button>Login</button>
      <p>If you do not have an account please&nbsp; 
        <Link to='/register'>register here</Link>
      </p>
    </StyledForm>
  )
};

export default Login;
