import axios from "axios";

class JoblyApi {
    static async request(endpoint, paramsOrData = {}, verb = "get") {
      paramsOrData._token = ( // for now, hardcode token for "testuser"
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6" +
      "InRlc3R1c2VyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1NDE1N" +
      "jQ2Nzl9.LYDHSkl81gEm7jfHv9wJhzD4ndpuBkSzBan8Nirb6UY");

      console.debug("API Call:", endpoint, paramsOrData, verb);

      try {
        return (await axios({
          method: verb,
          url: `http://localhost:3001/${endpoint}`,
          [verb === "get" ? "params" : "data"]: paramsOrData})).data;
          // axios sends query string data via the "params" key,
          // and request body data via the "data" key,
          // so the key we need depends on the HTTP verb
      }

      catch(err) {
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
    static async searchCompanies(searchTerm){
        let res = await this.request(`companies`, { search: searchTerm});
        return res.companies;
    }

  }

  export default JoblyApi;