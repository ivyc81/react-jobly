import React, { Component } from 'react';
import Routes from './Routes';
import { BrowserRouter, NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {
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
          <NavLink exact to="/companies"
                   activeStyle={activeStyle} >Companies </NavLink>
          <NavLink exact to="/jobs"
                   activeStyle={activeStyle} >Jobs </NavLink>
          <NavLink exact to="/profile"
                   activeStyle={activeStyle} >Profile </NavLink>
          <NavLink exact to="/">Log out </NavLink>
        </nav>
        <Routes />

      </BrowserRouter>
      </div>
    );
  }
}

export default App;
