import React, { Component } from 'react';

class Alert extends Component {


  render() {
    console.log('error in alert', this.props.errors)
    let error = this.props.errors.map( (e, idx) => <div key={idx}> { e } </div>);
    return (
      <div>
        { error }
      </div>
    );
  }
}

export default Alert;