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

const StyledHeader = styled.h1`
  font-family: 'Satisfy', cursive;
  font-size: 70px;
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
    <>
      <StyledHeader>Only Yoga</StyledHeader>
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
            type="text"
            value={email}
            placeholder="Email"
            name="email"
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
        <button>Register</button>
      </StyledForm>
    </>
  )
};

export default Register;