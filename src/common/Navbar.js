import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import '../styles/Navbar.css'

const NavBar = () => {

  const location = useLocation();


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
      <Link
        to="/profile"
        className={
          location.pathname === "/profile" ? "nav-item active" : "nav-item"
        }
      >
        Profile
      </Link>
    </div>
  )

}
export default NavBar;