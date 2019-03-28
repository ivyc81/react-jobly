import React, { Component } from 'react';
import Routes from './Routes';
import { BrowserRouter, NavLink } from 'react-router-dom';
import './App.css';
import JoblyApi from './JoblyApi';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      isLoading: true,
      isLoggedIn: false,
      logInError: false,
      currUser: null,
    };
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
  }

  async componentDidMount(){
    if(localStorage.getItem('token')){
      const currUsername = localStorage.getItem('username');
      const currUser = await JoblyApi.getCurrUserInfo(currUsername);
      this.setState({
        currUser,
        isLoading: false,
      })
    } else {
      this.setState({
        isLoading: false,
      })
    }
  }

  async login(obj){
    try{
      let token = await JoblyApi.login(obj.username, obj.password);
      localStorage.setItem('token', token );
      localStorage.setItem('username', obj.username);
      this.setState( {isLoggedIn: true, logInError: false});
    }
    catch(err){
      this.setState({ logInError: err});
    }
  }

  async signup(obj){
    try{
      const {username, password, firstname, lastname, email} = obj;
      let token = await JoblyApi.signup({
        username,
        password,
        first_name: firstname,
        last_name: lastname,
        email,
      });
      localStorage.setItem('token', token );
      localStorage.setItem('username', obj.username);
      this.setState({isLoggedIn: true});
    }
    catch(err){
      this.setState({ logInError: err });
    }
  }

  logout(){
    this.setState({isLoggedIn: false });
    localStorage.clear();
  }

  render() {
    const activeStyle = {
      fontWeight: 'bold',
      color: 'blue',
    }

    return (
      <div className="App">
      {this.state.isLoading? <p>...Loading</p>
      :
      <BrowserRouter>
        <nav>
        <NavLink exact to="/"
                 activeStyle={activeStyle} >Jobly </NavLink>
          { this.state.currUser ?
          <div>
            <NavLink exact to="/companies"
                    activeStyle={activeStyle} >Companies </NavLink>
            <NavLink exact to="/jobs"
                    activeStyle={activeStyle} >Jobs </NavLink>
            <NavLink exact to="/profile"
                    activeStyle={activeStyle} >Profile </NavLink>
            <NavLink exact to="/" onClick={this.logout}>Log out </NavLink>
          </div>
          :
            <NavLink exact to="/login">Login</NavLink>
          }
        </nav>
        <Routes currUser={this.state.currUser}
                isError={this.state.logInError}
                triggerLogin={this.login}
                triggerSignup={this.signup}/>

      </BrowserRouter>
    }
      </div>
    );
  }
}

export default App;
