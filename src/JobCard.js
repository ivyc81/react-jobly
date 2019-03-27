import React, { Component } from 'react';

class JobCard extends Component {
  render() {
    return (
      <div>
        <h2>{ this.props.title }</h2>
        <p>Salary: { this.props.salary }</p>
        <p>Equity: { this.props.equity }</p>
      </div>
    );
  }
}

export default JobCard;