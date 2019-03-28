import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
          <Route exact path="/"
                render={() =>
                  <Home isLoggedIn={this.props.isLoggedIn} />} />
          <Route exact path="/login"
                render={(rtProps) =>
                  <Login history={rtProps.history}
                        triggerLogin={this.props.triggerLogin}
                        isError={this.props.isError}
                        triggerSignup={this.props.triggerSignup}
                  />}
          />
          {this.props.isLoggedIn
          ?
            <div>
              <Route exact path="/companies"
                    render={() => <Companies />} />
              <Route exact path="/companies/:handle"
                    render={(rtProps) =>
                      <Company
                        handle={rtProps.match.params.handle} />} />
              <Route exact path="/jobs" render={() => <Jobs />} />
              <Route exact path="/profile"
                    render={() => <Profile />} />
            </div>
          :
            <Redirect to='/' />
          }
        </Switch>
      </div>
    );
  }
}

export default Routes;