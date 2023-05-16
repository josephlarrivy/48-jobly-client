import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import JoblyApi from "../api/api";
import JobCard from "./JobCard";



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
      <div key={companyInfo.handle}>
        <h2>{companyInfo.name}</h2>
        <p>{companyInfo.description}</p>
        <p>{companyInfo.numEmployees}</p>
        {companyInfo.jobs && companyInfo.jobs.map(job => {
          return(
            <JobCard
              title={job.title}
              id={job.id}
              salary={job.salary}
              equity={job.equity}
              // companyHandle={companyInfo.handle}
            />
          )
        })}

      </div>
    )
  }
}

export default CompanyDetail;