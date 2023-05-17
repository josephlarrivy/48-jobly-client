import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
const BASE_URL = "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let response = await this.request(`/companies/${handle}`);
    return response.company;
  }

  static async getAllCompanies() {
    const response = await this.request('/companies/');
    return response
  }

  // static async getSearchCompanies(queryParams) {
  //   const response = await this.request('/companies/', queryParams);
  //   return response;
  // }

  static async getSearchCompanies(minEmployees, maxEmployees, query) {
    const queryParams = {};

    if (minEmployees > 0) {
      queryParams.minEmployees = minEmployees;
    }

    if (maxEmployees > 0) {
      queryParams.maxEmployees = maxEmployees;
    }

    if (query) {
      queryParams.name = query;
    }

    try {
      const response = await this.request('/companies/', queryParams);
      return response;
    } catch (error) {
      throw error;
    }
  }







  static async registerUser(data) {
    const response = await this.request('/auth/register', data, 'post');
    return response
  }

  static async login(data) {
    const response = await this.request('/auth/token', data, 'post');
    JoblyApi.token = response.token;
    return response
  }

  static async getUserInfo(username) {
    // console.log(username)
    const response = await this.request(`/users/${username}`);
    JoblyApi.token = response.token;
    return response
  }

  static async patchUserInfo(username, updatedInfo, token) {
    const data = {
      'username': username,
      'password': updatedInfo.password
    }
    const response = await this.request('/auth/token', data, 'post');
    if (response.token) {
      const resp = await this.request(`/users/${username}`, updatedInfo, 'patch');
      console.log(resp)
      JoblyApi.token = response.token;
      return resp;
    } else {
      return 'invalid'
    }

    
  }









  static async getAllJobs() {
    const response = await this.request(`/jobs/`);
    return response
  }

  static async getJobDetailsById(id) {
    const response = await this.request(`/jobs/${id}`);
    return response;
  }

  static async applyToJob(id, username) {
    const data = 'xxx'
    try {
      const response = await this.request(`/users/${username}/jobs/${id}`, data, 'post')
      return response
    } catch (e) {
      console.log(e)
    }
    
  }

  // obviously, you'll add a lot here ...
}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";


export default JoblyApi;