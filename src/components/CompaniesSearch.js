import React, { useState } from "react";

import JoblyApi from "../api/api";

import '../styles/CompaniesSearch.css'

const CompaniesSearch = ({setCompanies}) => {

  const [barState, setBarState] = useState('closed')
  const [minEmployees, setMinEmployees] = useState()
  const [maxEmployees, setMaxEmployees] = useState()
  const [query, setQuery] = useState()
  const [searchContainerState, setSearchContainerState] = useState('search-container-closed')


  const openOrClose = () => {
    if (barState === 'open') {
      setBarState('closed')
      setSearchContainerState('search-container-closed')
    } else {
      setBarState('open')
      setSearchContainerState('search-container-open')
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
      <div id={searchContainerState}>
        <button onClick={openOrClose}>Close Search</button>
        <br></br>
        <br></br>
        <br></br>
        <div id="min-max-div">
          <label>
            Minimum Employees:
            <br />
            <input
              type="number"
              min={0}
              id="minEmployees"
              value={minEmployees}
              onChange={(e) => setMinEmployees(parseInt(e.target.value))}
            />
          </label>
          <br></br>
          <label>
            Maximum Employees:
            <br />
            <input
              type="number"
              min={0}
              id="maxEmployees"
              value={maxEmployees}
              onChange={(e) => setMaxEmployees(parseInt(e.target.value))}
            />
          </label>
        </div>
        <br></br>
        <label>
          Company Name:
          <br />
          <input
            type="text"
            id="query-field"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <br></br>
        <br></br>
        <button onClick={getCompanies}>Search</button>
      </div>
    )
  } else {
    return (
      <div id={searchContainerState}>
        <button onClick={openOrClose}>Open Search</button>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
  }
  
}

export default CompaniesSearch;