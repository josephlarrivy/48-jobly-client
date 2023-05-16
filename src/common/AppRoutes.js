import React from "react";
import { Routes, Route } from 'react-router-dom'
import TestApiRequests from "../components/TestApiRequests";

import Home from '../components/Home'
import Companies from '../components/Companies'
import IndividualCompany from '../components/IndividualCompany'
import Jobs from '../components/Jobs'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Profile from '../components/Profile'

const AppRoutes = () => {

  return (
    <>
      <Routes>
        <Route exact path="/test"
          element={<TestApiRequests />}
        />
        <Route exact path="/"
          element={<Home />}
        />
        <Route exact path="/companies"
          element={<Companies />}
        />
        <Route exact path="/companies/:name"
          element={<IndividualCompany />}
        />
        <Route exact path="/jobs"
          element={<Jobs />}
        />
        <Route exact path="/login"
          element={<Login />}
        />
        <Route exact path="/signup"
          element={<Signup />}
        />
        <Route exact path="/profile"
          element={<Profile />}
        />
      </Routes>
    </>
  )
}


export default AppRoutes;