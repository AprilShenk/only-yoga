import React, { useState } from 'react';

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
    <form onSubmit={(e)=>{
      e.preventDefault();
      handleRegister(formData);
    }}>
      <h3>Register</h3>
      {
        error &&
        <p>{error}</p>
      }
      <label>
        Username:
        <input
          type="text"
          value={username}
          name="username"
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Email:
        <input
          type="text"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Password:
        <input
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </label>
      <br></br>
      <button>Register</button>
    </form>
  )
};

export default Register;