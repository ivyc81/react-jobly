import React, { Component } from 'react';
import './JobCard.css';

class JobCard extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.triggerApplyJob(this.props.id, this.props.currUser.username);

  }
  render() {
    return (
      <div className='JobCard'>
        <h2>{ this.props.title }</h2>
        <p>Salary: { this.props.salary }</p>
        <p>Equity: { this.props.equity }</p>
        {this.props.isApplied ?
        <button style={{backgroundColor: 'brown'}}> Applied </button>
        :
        <button onClick={this.handleClick}> Apply </button>
        }
      </div>
    );
  }
}

export default JobCard;