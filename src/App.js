import React, { Component } from 'react';
import Routes from './Routes';
import { BrowserRouter, NavLink } from 'react-router-dom';
import './App.css';
import JoblyApi from './JoblyApi';

class App extends Component {
  constructor(props){
    super(props);
    this.state= { isLoggedIn: false};
    this.login = this.login.bind(this);
  }

  async login(obj){
    let token = await JoblyApi.login(obj.username, obj.password);
    localStorage.setItem('token', token );
    this.setState( {isLoggedIn: true});
  }
  
  render() {
    const activeStyle = {
      fontWeight: 'bold',
      color: 'blue',
    }

    return (
      <div className="App">
      <BrowserRouter>
        <nav>
        <NavLink exact to="/"
                 activeStyle={activeStyle} >Jobly </NavLink>
          { this.state.isLoggedIn ? 
          <div>
            <NavLink exact to="/companies"
                    activeStyle={activeStyle} >Companies </NavLink>
            <NavLink exact to="/jobs"
                    activeStyle={activeStyle} >Jobs </NavLink>
            <NavLink exact to="/profile"
                    activeStyle={activeStyle} >Profile </NavLink>
            <NavLink exact to="/">Log out </NavLink>
          </div>
          : 
            <NavLink exact to="/login">Login</NavLink>
          }
        </nav>
        <Routes triggerLogin={this.login}/>

      </BrowserRouter>
      </div>
    );
  }
}

export default App;
