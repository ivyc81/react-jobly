import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = ( // for now, hardcode token for "testuser"
      //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6" +
      //"InRlc3R1c2VyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1NDE1N" +
      //"jQ2Nzl9.LYDHSkl81gEm7jfHv9wJhzD4ndpuBkSzBan8Nirb6UY"
      localStorage.getItem('token')
    );

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `${BASE_URL}/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    }

    catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  //Get A company
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  //get all companies
  static async getCompanies() {
    let res = await this.request(`companies`);
    return res.companies;
  }

  //search for results by search term
  static async searchCompanies(searchTerm) {
    let res = await this.request(`companies`, { search: searchTerm });
    return res.companies;
  }

  //Get A job
  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  //get all jobs
  static async getJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  }

  //search for results by search term
  static async searchJobs(searchTerm) {
    let res = await this.request(`jobs`, { search: searchTerm });
    return res.jobs;
  }

  static async login(username, password) {
    let res = await this.request('login', { username, password }, 'post');
    return res.token;
  }

  static async signup(userObj) {
    let res = await this.request('users', userObj, 'post');
    return res.token;
  }

  static async getCurrUserInfo(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async updateUserInfo(obj){
    const { username, ...userInfo } = obj;
    console.log('username', username)
    console.log('userInfo', userInfo)
    let res = await this.request(`users/${obj.username}`, userInfo, 'patch');
    return res.user;
  }

  static async applyToJob(id, username){
    let res = await this.request(`jobs/${id}/apply`, {username}, 'post');
    return res.message;
  }

}

export default JoblyApi;