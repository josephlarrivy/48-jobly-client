import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import JoblyApi from "../api/api";
import JobCard from "./JobCard";

import '../styles/CompanyDetail.css'

const CompanyDetail = () => {

  const handle = useParams()
  const navigate = useNavigate()
  const [companyInfo, setCompanyInfo] = useState()

  const getDetails = async () => {
    const response = await JoblyApi.getCompany(handle.name)
    setCompanyInfo(response)
    console.log(response)
  }

  useEffect(() => {
    console.log(handle)
    getDetails()
  }, [])


  if (companyInfo) {
    return (
      <div key={companyInfo.handle} id='jobs-list-container'>
        <h2>{companyInfo.name}</h2>
        <p>{companyInfo.description}</p>
        <p>{companyInfo.numEmployees}</p>
        {companyInfo.jobs && companyInfo.jobs.map(job => {
          return(
            <div className="job-card-outer-container">
              <JobCard
                title={job.title}
                id={job.id}
                salary={job.salary}
                equity={job.equity}
                companyHandle={companyInfo.handle}
                companyName={companyInfo.name}
                location={'company'}
              />
            </div>
          )
        })}

      </div>
    )
  }
}

export default CompanyDetail;