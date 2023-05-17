import React, { useState } from "react";

import JoblyApi from "../api/api";

import '../styles/CompaniesSearch.css'

const CompaniesSearch = ({setCompanies}) => {

  const [barState, setBarState] = useState('closed')
  const [minEmployees, setMinEmployees] = useState()
  const [maxEmployees, setMaxEmployees] = useState()
  const [query, setQuery] = useState()


  const openOrClose = () => {
    if (barState === 'open') {
      setBarState('closed')
    } else {
      setBarState('open')
    }
  }


  const getCompanies = async () => {
    try {
      const response = await JoblyApi.getSearchCompanies(minEmployees, maxEmployees, query);
      const companies = response.companies;
      console.log(companies);
      setCompanies(companies)
    } catch (error) {
      console.log("Error retrieving companies:", error);
    }
    setMinEmployees('')
    setMaxEmployees('')
    setQuery('')
    // const queryParams = {};
    // if (minEmployees > 0) {
    //   queryParams.minEmployees = minEmployees;
    // }
    // if (maxEmployees > 0) {
    //   queryParams.maxEmployees = maxEmployees;
    // }
    // if (query) {
    //   queryParams.query = query;
    // }
    // try {
    //   const response = await JoblyApi.getSearchCompanies(queryParams);
    //   const companies = response.companies;
    //   console.log("Companies:", companies);
    // } catch (error) {
    //   console.log("Error retrieving companies:", error);
    // }
  };





  if (barState === 'open') {
    return (
      <div id="search-container">
        <button onClick={openOrClose}>Close Search</button>
        <label>
          Minimum Employees:
          <input
            type="number"
            min={0}
            id="minEmployees"
            value={minEmployees}
            onChange={(e) => setMinEmployees(parseInt(e.target.value))}
          />
        </label>
        <label>
          Maximum Employees:
          <input
            type="number"
            min={0}
            id="maxEmployees"
            value={maxEmployees}
            onChange={(e) => setMaxEmployees(parseInt(e.target.value))}
          />
        </label>
        <label>
          Query:
          <input
            type="text"
            id="query-field"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <button onClick={getCompanies}>Search</button>
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={openOrClose}>Open Search</button>
      </div>
    )
  }
  
}

export default CompaniesSearch;