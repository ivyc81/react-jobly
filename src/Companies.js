import React, { Component } from 'react';
import CompanyCard from './CompanyCard';
import Search from './Search';
import JoblyApi from './JoblyApi';

class Companies extends Component {
    constructor(props){
        super(props);
        this.state = { companies: [] };
        this.searchItem = this.searchItem.bind(this);
    }

    async componentDidMount(){
        let companies = await JoblyApi.getCompanies();
        this.setState({ companies });
    }

    async searchItem(searchTerm){
        let companies = await JoblyApi.searchCompanies(searchTerm);
        this.setState({ companies });
    }


    render() {
        let companies = this.state.companies.map( c => (
            <CompanyCard key={c.handle} handle={c.handle} name={c.name} description={c.description} logo_url={c.logo_url}/>
        ));
        return (
            <div>
                <Search triggerSearch={ this.searchItem }/>
                { companies }
            </div>
        );
    }
}

export default Companies;