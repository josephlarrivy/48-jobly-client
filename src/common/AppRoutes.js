import React from "react";
import { Routes, Route } from 'react-router-dom'
import TestApiRequests from "../components/TestApiRequests";

import Home from '../components/Home'
import Companies from '../components/CompanyList'
import CompanyDetail from '../components/CompanyDetail'
import Jobs from '../components/Jobs'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Profile from '../components/Profile'
import JobCard from "../components/JobCard";

import useLocalStorage from "../hooks/useLocalStorage";


const AppRoutes = ({reload}) => {

  const [token, setTokenValue, removeToken, getToken, getDecodedToken] = useLocalStorage('token');

  if (token) {
    return (
      <>
        <Routes>
          <Route exact path="/"
            element={<Home />}
          />
          <Route exact path="/companies"
            element={<Companies />}
          />
          <Route exact path="/companies/:name"
            element={<CompanyDetail />}
          />
          <Route exact path="/jobs"
            element={<Jobs />}
          />
          <Route exact path="/login"
            element={<Login reload={reload} />}
          />
          <Route exact path="/signup"
            element={<Signup reload={reload} />}
          />
          <Route exact path="/profile"
            element={<Profile />}
          />
        </Routes>
      </>
    )
  } else {
    return (
      <>
        <Routes>
          <Route exact path="/"
            element={<Home />}
          />
          <Route exact path="/login"
            element={<Login reload={reload} />}
          />
          <Route exact path="/signup"
            element={<Signup reload={reload} />}
          />
        </Routes>
      </>
    )
  }
  
}


export default AppRoutes;