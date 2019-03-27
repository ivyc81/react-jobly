import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CompanyCard extends Component {
    render() {
        return (
            <div>
                <Link to={`/companies/${this.props.name}`}>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.description}</p>
                </Link>
            </div>
        );
    }
}

export default CompanyCard;