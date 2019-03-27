import React, { Component } from 'react';
import JobCard from './JobCard';
import JoblyApi from './JoblyApi';

class Company extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            descriptioin: '',
            name: '',
        }
    }

    async componentDidMount() {
        console.log('handle', this.props.handle)
        let company = await JoblyApi.getCompany(this.props.handle);
        this.setState({ jobs: company.jobs,
                        description: company.description,
                        name: company.name });
    }

    render() {
        const jobs = this.state.jobs.map( job => (
            <JobCard key={ job.id } title={ job.title } salary={ job.salary } equity={ job.equity } />
        ));

        return (
            <div>
                <h2>{ this.state.name }</h2>
                <p>{ this.state.description }</p>
                { jobs }
            </div>
        );
    }
}

export default Company;