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
      logInError: false,
      currUser: null,
    };
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.applyToJob = this.applyToJob.bind(this);
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
      const currUser = await JoblyApi.getCurrUserInfo(obj.username);
      this.setState( {currUser, logInError: false});
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
      const currUser = await JoblyApi.getCurrUserInfo(obj.username);
      this.setState({ currUser });
    }
    catch(err){
      this.setState({ logInError: err });
    }
  }

  logout(){
    this.setState({ currUser: null });
    localStorage.clear();
  }

  async updateProfile(obj){
   const { username, firstname, lastname, email, photoUrl} = obj;
    let userInfo;
   if(!photoUrl){
     userInfo = await JoblyApi.updateUserInfo({username, first_name: firstname, last_name: lastname, email});
   }
   else{
     userInfo = await JoblyApi.updateUserInfo({username, first_name: firstname, last_name: lastname, email, photo_url: photoUrl});
   }
    const currUser = await JoblyApi.getCurrUserInfo(username);
    this.setState( {currUser} );
  }

  async applyToJob(id, username){
    let msg = await JoblyApi.applyToJob(id, username);
    const currUser = await JoblyApi.getCurrUserInfo(username);
    this.setState({ currUser});
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
          <p>
            <NavLink exact to="/companies"
                    activeStyle={activeStyle} >Companies </NavLink>
            <NavLink exact to="/jobs"
                    activeStyle={activeStyle} >Jobs </NavLink>
            <NavLink exact to="/profile"
                    activeStyle={activeStyle} >Profile </NavLink>
            <NavLink exact to="/" onClick={this.logout}>Log out </NavLink>
          </p>
          :
          <p>
            <NavLink exact to="/login">Login</NavLink>
          </p>
          }
        </nav>
        <Routes currUser={this.state.currUser}
                isError={this.state.logInError}
                triggerLogin={this.login}
                triggerSignup={this.signup}
                triggerUpdate= {this.updateProfile}
                triggerApplyJob={this.applyToJob}/>

      </BrowserRouter>
    }
      </div>
    );
  }
}

export default App;
