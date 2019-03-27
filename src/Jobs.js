import React, { Component } from 'react';
import JobCard from './JobCard';
import Search from './Search';

class Jobs extends Component {

    //we need search component
    //we need company card
    render() {
        return (
            <div>
                <Search />
                {/* {Fixme mapover list of jobs} */}
                <JobCard />
            </div>
        );
    }
}

export default Jobs;