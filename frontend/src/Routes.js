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
                  <Home currUser={this.props.currUser} />} />
          <Route exact path="/login"
                render={(rtProps) =>
                  <Login history={rtProps.history}
                        triggerLogin={this.props.triggerLogin}
                        isError={this.props.isError}
                        triggerSignup={this.props.triggerSignup}
                  />}
          />
          {this.props.currUser
          ?
            <div>
              <Route exact path="/companies"
                    render={() => <Companies />} />
              <Route exact path="/companies/:handle"
                    render={(rtProps) =>
                      <Company
                        handle={rtProps.match.params.handle} 
                        triggerApplyJob={this.props.triggerApplyJob} 
                        currUser={this.props.currUser}
                        />} />
              <Route exact path="/jobs" render={() => <Jobs triggerApplyJob={this.props.triggerApplyJob}
                                                            currUser={this.props.currUser} />} />
              <Route exact path="/profile"
                    render={() => <Profile currUser={this.props.currUser} triggerUpdate={this.props.triggerUpdate}/>} />
            </div>
          :
            <Redirect to='/login' />
          }
        </Switch>
      </div>
    );
  }
}

export default Routes;