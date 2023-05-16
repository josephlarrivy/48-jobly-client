import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import JoblyApi from "../api/api";



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
      <div>
        <h2>{companyInfo.name}</h2>
        <p>{companyInfo.description}</p>
        <p>{companyInfo.numEmployees}</p>
        {companyInfo.jobs && companyInfo.jobs.map(job => {
          return(
            <div>
              <p>{job.title}</p>
              <p>{job.salary}</p>
              <button
                onClick={() => navigate(`/jobs/${job.id}`)}
              >view job</button>
            </div>
          )
        })}

      </div>
    )
  }
}

export default CompanyDetail;