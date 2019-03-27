import React, { Component } from 'react';
import JobCard from './JobCard';
import Search from './Search';
import JoblyApi from './JoblyApi';

class Jobs extends Component {
    constructor(props){
        super(props);
        this.state = { jobs: [] };
        this.searchItem = this.searchItem.bind(this);
    }

    async componentDidMount(){
        let jobs = await JoblyApi.getJobs();
        this.setState({ jobs });
    }

    async searchItem(searchTerm){
        let jobs = await JoblyApi.searchJobs(searchTerm);
        this.setState({ jobs });
    }

    render() {
        const jobs = this.state.jobs.map( job => (
            <JobCard key={ job.id } title={ job.title } salary={ job.salary } equity={ job.equity } />
        ))
        return (
            <div>
                <Search triggerSearch={ this.searchItem }/>
                { jobs }
            </div>
        );
    }
}

export default Jobs;