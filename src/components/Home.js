import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import useLocalStorage from "../hooks/useLocalStorage";

import '../styles/Home.css'


const Home = () => {

  const [token, setTokenValue, removeToken, getToken, getDecodedToken] = useLocalStorage('token');
  const navigate = useNavigate()
  const [userName, setUserName] = useState()




  useEffect(() => {
    const token = getToken()
    console.log(token)

    const decodedToken = getDecodedToken()
    console.log(decodedToken)
    setUserName(decodedToken.username)
    

    if (token) {
      console.log(token)
    }
  }, [])

  if (token) {
    return (
      <div className="home-container">
        <h1>Jobly</h1>
        <p>Welcome back {userName}</p>
      </div>
    )
  } else {
    return (
      <div className="home-container">
        <h1>Jobly</h1>
        <p>Welcome. Please log in or sign up to view jobs.</p>
        <button onClick={() => {navigate('/login')}}>Log In</button>
        <button onClick={() => {navigate('/signup')}}>Sign Up</button>
      </div>
    )
  }

  
}

export default Home;