import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'


import logo from './logo.svg';
import './App.css';
import JoblyApi from './api/api';
import AppRoutes from './common/AppRoutes';
import NavBar from './common/Navbar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <div id='navbar-container'>
        <NavBar />
      </div>
      <div id='page-container'>
          <AppRoutes />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;