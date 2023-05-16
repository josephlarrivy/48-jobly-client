import React, { useEffect, useState } from "react";
import JoblyApi from "../api/api";
import CompanyCard from "./CompanyCard";



const CompanyList = () => {

  const [companies, setCompanies] = useState()

  const getAllCompanies = async () => {
    const companiesData = await JoblyApi.getAllCompanies()
    console.log(companiesData)
    setCompanies(companiesData.companies)
  }

  useEffect(() => {
    getAllCompanies()
  }, [])

  return (
    <div>
      <h1>Companies</h1>
      {companies && companies.map(company => {
        return (
          <CompanyCard
            description={company.description}
            handle={company.handle}
            // logoUrl={company.logoUrl}
            name={company.name}
            numEmployees={company.numEmployees}
          />
        )
      })}
    </div>
  )
}

export default CompanyList;