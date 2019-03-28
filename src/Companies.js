import React, { Component } from 'react';
import CompanyCard from './CompanyCard';
import Search from './Search';
import JoblyApi from './JoblyApi';
import Alert from './Alert';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = { companies: [] , errorMessage: "", isLoading: true };
    this.searchCompaniesByTerm = this.searchCompaniesByTerm.bind(this);
  }

  async componentDidMount() {
    try{
      let companies = await JoblyApi.getCompanies();
      this.setState({ companies , isLoading: false});
    }
    catch(err){
        this.setState({ errorMessage: err, isLoading: false });
        
    }
  }

  async searchCompaniesByTerm(searchTerm) {
    let companies = await JoblyApi.searchCompanies(searchTerm);
    this.setState({ companies, isLoading: false });
  }


  render() {
    let companies = this.state.companies.map(c => (
      <CompanyCard key={c.handle}
                   handle={c.handle}
                   name={c.name}
                   description={c.description}
                   logo_url={c.logo_url} />
    ));

    return (
      <div className='Companies'>
      { this.state.isLoading ? <p>...Loading</p> :
        <div>
        {localStorage.getItem('token') !== null
        ? 
            <div>
            <Search triggerSearch={ this.searchCompaniesByTerm } /> 
            { companies }
            </div>
        : 
            <Alert errors={this.state.errorMessage}/>
        } 
        </div>
     }
        
      </div>
    );
  }
}

export default Companies;