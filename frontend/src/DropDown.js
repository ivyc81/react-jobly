import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './DropDown.css';

class DropDown extends Component {
  componentDidMount() {
    document.addEventListener('click', this.props.triggerHideDropDown);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.props.triggerHideDropDown);
  }

  render() {
    const activeStyle = {
      fontWeight: 'bold',
      color: 'blue',
    };

    return (
      <p className="dropDown">
        <p>Menu</p>
        <NavLink exact to="/companies"
          activeStyle={activeStyle} >Companies </NavLink><br />
        <NavLink exact to="/jobs"
          activeStyle={activeStyle} >Jobs </NavLink><br />
        <NavLink exact to="/profile"
          activeStyle={activeStyle} >Profile </NavLink><br />
        <NavLink exact to="/" onClick={this.props.triggerLogout}>Log out </NavLink>
      </p>
    );
  }
}

export default DropDown;