import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import JoblyApi from "../api/api";

import '../styles/JobCard.css'

const JobCard = ({ title, id, salary, equity, companyHandle, companyName, location }) => {

  const navigate = useNavigate()
  const name = companyHandle;


  const goToCompany = () => {
    navigate(`/companies/${name}`)
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
        ? <button onClick={() => goToCompany()}>View Company</button>
        : <></>
      }
      <button>Apply</button>
    </div>
  )
}

export default JobCard;