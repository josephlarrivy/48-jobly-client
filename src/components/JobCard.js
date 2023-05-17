import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import JoblyApi from "../api/api";
import useLocalStorage from "../hooks/useLocalStorage";


import '../styles/JobCard.css'

const JobCard = ({ title, id, salary, equity, companyHandle, companyName, location }) => {

  const [token, setTokenValue, removeToken, getToken, getDecodedToken] = useLocalStorage('token');
  const [buttonState, setButtonState] = useState('not-clicked')
  const [applyButtonText, setApplyButtonText] = useState('Apply')


  const navigate = useNavigate()
  const name = companyHandle;

  const goToCompany = () => {
    navigate(`/companies/${name}`)
  }

  const applyToJob = async () => {
    const decodedToken = getDecodedToken()
    setButtonState('clicked')
    setApplyButtonText('Applied')
    // console.log(decodedToken.username)
    // console.log(id)
    const response = await JoblyApi.applyToJob(id, decodedToken.username)
    console.log(response)
  }

  return(
    <div id="job-card-container">
      <h4>{title}</h4>
      {location === 'jobs'
        ? <p>{companyName}</p>
        : <></>
      }
      {salary
        ? <p>Salary ${salary}</p>
        : <></>
      }
      {equity != 0
        ? <p>Equity {equity}</p>
        : <></>
      }
      {location === 'jobs'
        ? <button className='not-clicked' onClick={() => goToCompany()}>View Company</button>
        : <></>
      }
      <button className={buttonState} onClick={applyToJob}>{applyButtonText}</button>
    </div>
  )
}

export default JobCard;