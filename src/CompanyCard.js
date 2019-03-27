import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CompanyCard extends Component {
    render() {
        return (
            <div>
                <Link to="/companies/name">
                    <h2>THIS IS A COMPANY CARD</h2>
                    <p>NEED INFORMATION ABOUT COMPANY PROPS HERE</p>
                </Link>
            </div>
        );
    }
}

export default CompanyCard;