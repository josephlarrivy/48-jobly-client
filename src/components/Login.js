import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useNavigate } from 'react-router-dom'
import JoblyApi from "../api/api";

import '../styles/Login.css'


const Login = ({reload}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setTokenValue, removeToken, getToken, getDecodedToken] = useLocalStorage('token');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await JoblyApi.login({
        username, password
      });
      console.log(response)
      setTokenValue(response.token);
      setTimeout(() => {
        navigate('/')
      }, 300)
      reload()
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div id="register-form-main-container">
      <form onSubmit={handleSubmit}>
        <p className="input-label">Username:</p>
        <input
          type="text"
          value={username}
          id='register-username-input'
          maxLength={30}
          onChange={(e) => setUsername(e.target.value)}
          required
        />


        <p className="input-label">Password:</p>
        <input
          type="password"
          value={password}
          id='register-password-input'
          maxLength={20}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br></br>
        <br></br>
        
        <button id="login-form-submit" type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;