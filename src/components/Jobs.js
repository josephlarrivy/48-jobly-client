import React, { useEffect, useState } from "react";
import JoblyApi from "../api/api";
import JobCard from "./JobCard";



const Jobs = () => {

  const [allJobs, setAllJobs] = useState()

  const getAllJobs = async () => {
    const response = await JoblyApi.getAllJobs()
    console.log(response.jobs)
    setAllJobs(response.jobs)
  }

  useEffect(() => {
    getAllJobs()
  }, [])


  return (
    <div style={{ paddingBottom: '30px' }}>
      {allJobs && allJobs.map(job => {
        return (
          <JobCard
            title={job.title}
            id={job.id}
            salary={job.salary}
            equity={job.equity}
            companyHandle={job.companyHandle}
            companyName={job.companyName}
            location={'jobs'}
          />
        )
      })}
    </div>
  )
  
  
}

export default Jobs;