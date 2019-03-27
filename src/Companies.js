import React, { Component } from 'react';
import CompanyCard from './CompanyCard';
import Search from './Search';

class Companies extends Component {

    //we need search component
    //we need company card
    render() {
        return (
            <div>
                <Search />
                <CompanyCard />
            </div>
        );
    }
}

export default Companies;