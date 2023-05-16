import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import JoblyApi from "../api/api";


const JobCard = ({ title, id, salary, equity }) => {

  // const [jobInfo, setJobInfo] = useState()

  // const getJobDetails = async () => {
  //   const response = await JoblyApi.getJobDetailsById(id)
  //   console.log(response.job)
  //   setJobInfo(response.job)
  // }

  // useEffect(() => {
  //   console.log(id)
  //   getJobDetails()
  // }, [])

  return(
    <div id="job-card-container">
      <h4>{title}</h4>
      <p>{salary}</p>
      <button>Apply</button>
    </div>
  )
}

export default JobCard;