import React, { Component } from 'react';
import JobCard from './JobCard';

class Company extends Component {
    render() {
        return (
            <div>
                <h2>THIS IS A COMPANY</h2>
                <p>NEED INFORMATION ABOUT Job PROPS HERE</p>
                {/* { FIXME mapover list of jobs} */}
                <JobCard />
            </div>
        );
    }
}

export default Company;