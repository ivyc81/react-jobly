import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import DropDown from './DropDown';
import './Nav.css';

class Nav extends Component {
  constructor(props){
    super(props);
    this.state={
      windowWidth: window.innerWidth,
      showDropDown: false,
    };
    this.updateWindowWidth = this.updateWindowWidth.bind(this);
    this.showDropDown = this.showDropDown.bind(this);
    this.hideDropDown = this.hideDropDown.bind(this);
  }

  async componentDidMount(){
    this.updateWindowWidth();
    window.addEventListener('resize', this.updateWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth);
  }

  updateWindowWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }

  showDropDown() {
    this.setState({ showDropDown: true });
  }

  hideDropDown(evt) {
    if (!this.dropDown.contains(evt.target)) {
      this.setState({ showDropDown: false });
    }
  }

  render() {
    const activeStyle = {
      fontWeight: 'bold',
      color: 'blue',
    };

    return (
      <nav className='Nav'>
        <NavLink exact to="/"
          activeStyle={activeStyle} >Jobly </NavLink>
        {this.props.currUser ?
          <p>
            {this.state.windowWidth > 700
              ?
              <p className='navItem'>
                <NavLink exact to="/companies"
                  activeStyle={activeStyle} >Companies </NavLink>
                <NavLink exact to="/jobs"
                  activeStyle={activeStyle} >Jobs </NavLink>
                <NavLink exact to="/profile"
                  activeStyle={activeStyle} >Profile </NavLink>
                <NavLink exact to="/" onClick={this.props.triggerLogout}>Log out </NavLink>
              </p>
              :
              <p>
                <i className="fas fa-bars" onClick={this.showDropDown}></i>
                {this.state.showDropDown
                ?
                  <p ref={(ele) => this.dropDown = ele}>
                  <DropDown triggerShowDropDown = {this.showDropDown}
                            triggerHideDropDown = {this.hideDropDown}
                            triggerLogout = {this.props.triggerLogout}/>
                  </p>
                :
                  null
                }

              </p>
            }
          </p>
          :
          <p>
            <NavLink exact to="/login">Login</NavLink>
          </p>
        }
      </nav>
    );
  }
}

export default Nav;