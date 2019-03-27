import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const DEFAULT_LOGO_URL = 'http://www.jobdzire.in/img/comp-logo-default.png';

class CompanyCard extends Component {
  render() {
    return (
      <div className='CompanyCard'>
        <Link to={ `/companies/${this.props.handle}` }>
          <h2>{ this.props.name }</h2>
          <img src={ this.props.logo_url || DEFAULT_LOGO_URL }
               alt='company logo' />
          <p>{ this.props.description }</p>
        </Link>
      </div>
    );
  }
}

export default CompanyCard;