import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";


import '../styles/Navbar.css'

const NavBar = ({reload}) => {

  const location = useLocation();
  const navigate = useNavigate()
  const [token, setTokenValue, removeToken, getToken, getDecodedToken] = useLocalStorage('token');
  const [username, setUsername] = useState()

  useEffect(() => {
    const decodedToken = getDecodedToken()
    setUsername(decodedToken.username)
  })

  const logout = () => {
    removeToken()
    reload()
    navigate('/')
  }



  if (token) {
    return (
      <div id="nav-inner-container">
        <Link
          to="/"
          className={
            location.pathname === "/" ? "nav-item active" : "nav-item"
          }
        >
          Home
        </Link>
        <Link
          to="/companies"
          className={
            location.pathname === "/companies" ? "nav-item active" : "nav-item"
          }
        >
          Companies
        </Link>
        <Link
          to="/jobs"
          className={
            location.pathname === "/jobs" ? "nav-item active" : "nav-item"
          }
        >
          Jobs
        </Link>
        <Link
          to="/profile"
          className={
            location.pathname === "/profile" ? "nav-item active" : "nav-item"
          }
        >
          {username}
        </Link>
        <p
          className="nav-item"
          onClick={() => logout()}
          style={{ cursor: 'pointer' }}
        >Log Out</p>
      </div>
    )
  } else {
    return (
      <div id="nav-inner-container">
        <Link
          to="/"
          className={
            location.pathname === "/" ? "nav-item active" : "nav-item"
          }
        >
          Home
        </Link>
        <Link
          to="/login"
          className={
            location.pathname === "/login" ? "nav-item active" : "nav-item"
          }
        >
          Login
        </Link>
        <Link
          to="/signup"
          className={
            location.pathname === "/signup" ? "nav-item active" : "nav-item"
          }
        >
          Signup
        </Link>
      </div>
    )
  }
}
export default NavBar;