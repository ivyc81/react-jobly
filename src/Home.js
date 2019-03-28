import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  //handle click to show login form
  handleClick(evt){

  }
  render() {
    return (
      <div>
        <h1>Jobly</h1>
        <p>All the jobs in one, convenient place.</p>
        { this.props.currUser
        ?
          <p>Welcome {this.props.currUser.first_name}</p>
        :
         <button> <Link to='/login' > Login </Link></button>
        }
      </div>
    );
  }
}

export default Home;