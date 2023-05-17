import React, { useEffect, useState } from "react";
import JoblyApi from "../api/api";
import useLocalStorage from "../hooks/useLocalStorage";


import '../styles/Login.css'


const Profile = () => {

  const [userDetails, setUserDetails] = useState()
  const [token, setTokenValue, removeToken, getToken, getDecodedToken] = useLocalStorage('token');
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);



  const getUserInfo = async (username) => {
    try {
      const response = await JoblyApi.getUserInfo(username, token);
      // console.log(response.user);
      setUserDetails(response.user);
      setUsername(response.user.username)
      setFirstName(response.user.firstName)
      setLastName(response.user.lastName)
      setEmail(response.user.email)
    } catch (error) {
      console.log("Error fetching user info:", error);
    }
  };

  useEffect(() => {
    const decodedToken = getDecodedToken()
    getUserInfo(decodedToken.username)
  }, [])



  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const sendUpdatedinfo = async () => {
    try {
      const updatedInfo = {
        firstName, lastName, email, password
      };
      // const response = await JoblyApi.patchUserInfo(username, updatedInfo, token);
      const response = await JoblyApi.patchUserInfo(username, updatedInfo);
      console.log("User updated:", response.user);
      setError('updated')
    } catch (error) {
      console.log("Error updating user info:", error);
      setError('password incorrect')
    }
  }

  


  return (
    <div id="register-form-main-container">
      <h3>edit profile below</h3>
      {/* <label>
        Username:
        <br />
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}/>
      </label> */}
      <br />
      <label>
        First Name:
        <br />
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange} />
      </label>
      <br />
      <label>
        Last Name:
        <br />
        <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange} />
      </label>
      <br />
      <label>
        Email:
        <br />
        <input
          type="text"
          value={email}
          onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Confirm with password:
        <br />
        <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      </label>
      <br />
      <br />
      {error !== null
        ? <p id="error">{error}</p>
        : <></>
      }
      <br></br>
      <button
        id="register-form-submit"
        type="submit"
        onClick={sendUpdatedinfo}
      >Update With Changes</button>
    </div>
  );
}

export default Profile;