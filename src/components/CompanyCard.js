import React from "react";
import { useNavigate } from 'react-router-dom'

const CompanyCard = ({ name, description, handle, numEmployees }) => {

  const navigate = useNavigate()

  const handleClick = () => {
    console.log(handle)
    navigate(`/companies/${handle}`)
  };

  return (
    <div className="company-card">
      <h2 id="company-name">{name}</h2>
      <p id="company-description">{description}</p>
      <p id="company-handle">Handle: {handle}</p>
      <p id="num-employees">Number of Employees: {numEmployees}</p>
      <button onClick={handleClick}>See Details</button>
    </div>
  );
};

export default CompanyCard;