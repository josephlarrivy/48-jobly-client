import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useNavigate }  from 'react-router-dom'
import JoblyApi from "../api/api";

import '../styles/Login.css'


const Signup = ({reload}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordWarning, setPasswordWarning] = useState(null);
  const [token, setTokenValue, removeToken, getToken, getDecodedToken] = useLocalStorage('token');
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (password !== confirmPassword) {
      setPasswordWarning('passwords do not match');
    } else if (password === confirmPassword) {
      setPasswordWarning('passwords match');
    }
  }, [password, confirmPassword]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await JoblyApi.registerUser({
        username, password, firstName, lastName, email
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

        <p className="input-label">First Name:</p>
        <input
          type="text"
          value={firstName}
          id='register-firstname-input'
          maxLength={30}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <p className="input-label">Last Name:</p>
        <input
          type="text"
          value={lastName}
          id='register-lastname-input'
          maxLength={30}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <p className="input-label">Email:</p>
        <input
          type="email"
          value={email}
          id='register-email-input'
          maxLength={60}
          onChange={(e) => setEmail(e.target.value)}
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

        <p className="input-label">Confirm Password:</p>
        <input
          type="password"
          value={confirmPassword}
          id='register-confirm-password-input'
          maxLength={20}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {password !== '' && passwordWarning && <p id="password-warning">{passwordWarning}</p>}
        <br></br>
        {error && <p>{error}</p>}
        <button id="register-form-submit" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;