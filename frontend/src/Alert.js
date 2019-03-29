import React, { Component } from 'react';

class Alert extends Component {
  render() {
    let error = this.props.errors.map( (e, idx) => <div key={idx}> { e } </div>);
    return (
      <div>
        { error }
      </div>
    );
  }
}

export default Alert;