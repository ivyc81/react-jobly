import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import Profile from './Profile';
import Login from './Login';


class Routes extends Component {

  //call server to get token and store in localstorage


  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <Home isLoggedIn={this.props.isLoggedIn} />} />
          <Route exact path="/companies" render={() => <Companies />} />
          <Route exact path="/companies/:handle"
                 render={(rtProps) =>
                 <Company handle={rtProps.match.params.handle} />} />
          <Route exact path="/jobs" render={() => <Jobs />} />
          <Route exact path="/profile" render={() => <Profile />} />
          <Route exact path="/login" render={(rtProps) => <Login history={rtProps.history} triggerLogin={this.props.triggerLogin} isError={this.props.isError} triggerSignup={this.props.triggerSignup}/>} />
        </Switch>

      </div>
    );
  }
}

export default Routes;