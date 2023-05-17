import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import JoblyApi from "../api/api";
import useLocalStorage from "../hooks/useLocalStorage";

import '../styles/JobCard.css';

const JobCard = ({ title, id, salary, equity, companyHandle, companyName, location }) => {
  const [token, setTokenValue, removeToken, getToken, getDecodedToken] = useLocalStorage('token');
  const [buttonState, setButtonState] = useState('not-clicked');
  const [applyButtonText, setApplyButtonText] = useState('Apply');

  const navigate = useNavigate();
  const name = companyHandle;

  const goToCompany = () => {
    navigate(`/companies/${name}`);
  };

  const applyToJob = async () => {
    const decodedToken = getDecodedToken();
    setButtonState('clicked');
    setApplyButtonText('Applied');
    const response = await JoblyApi.applyToJob(id, decodedToken.username);
    console.log(response);

    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    appliedJobs.push(id);
    localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
  };

  useEffect(() => {
    let appliedJobs;
    if (localStorage.getItem('appliedJobs')) {
      appliedJobs = JSON.parse(localStorage.getItem('appliedJobs'))
    } else {
      appliedJobs = []
    }
    if (appliedJobs.includes(id)) {
      setButtonState('clicked');
      setApplyButtonText('Applied');
    }
  }, [id]);

  return (
    <div id="job-card-container">
      <h4>{title}</h4>
      {location === 'jobs' ? <p>{companyName}</p> : null}
      {salary ? <p>Salary ${salary}</p> : null}
      {equity !== 0 ? <p>Equity {equity}</p> : null}
      {location === 'jobs' ? (
        <button className='not-clicked' onClick={goToCompany}>
          View Company
        </button>
      ) : null}
      <button className={buttonState} onClick={applyToJob}>
        {applyButtonText}
      </button>
    </div>
  );
};

export default JobCard;
