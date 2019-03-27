import React, { Component } from 'react';
import Routes from './Routes';
import { BrowserRouter, NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <nav>
          <NavLink exact to="/">Jobly </NavLink>
          <NavLink exact to="/companies">Companies </NavLink>
          <NavLink exact to="/jobs">Jobs </NavLink>
          <NavLink exact to="/profile">Profile </NavLink>
          <NavLink exact to="/">Log out </NavLink>
        </nav>
        <Routes />

      </BrowserRouter>
      </div>
    );
  }
}

export default App;
