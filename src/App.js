import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'


import logo from './logo.svg';
import './App.css';
import JoblyApi from './api/api';
import AppRoutes from './common/AppRoutes';
import NavBar from './common/Navbar';

function App() {

  const reload = () => {
    setTimeout(() => {
      window.location.reload();
    }, 300)
  }

  return (
    <div className="App">
      <BrowserRouter>
      <div id='navbar-container'>
        <NavBar reload={reload}/>
      </div>
      <div id='page-container'>
          <AppRoutes reload={reload}/>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;