import React, { useState } from 'react';
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

const Register = ({ error, handleRegister }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const { username, email, password } = formData;


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
      handleRegister(formData);
    }}>
      <h3>Register</h3>
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
          Email:&nbsp;
          <input
            type="text"
            value={email}
            name="email"
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
      <button>Register</button>
    </StyledForm>
  )
};

export default Register;