import React, { Component } from 'react';
import CompanyCard from './CompanyCard';
import Search from './Search';

class Companies extends Component {

    render() {
        return (
            <div>
                <Search />
                {/* {FIXME map over list of copmanies} */}
                <CompanyCard />
            </div>
        );
    }
}

export default Companies;