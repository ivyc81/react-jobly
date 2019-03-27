import React, { Component } from 'react';
import { NavLink, BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Companies from './Companies';
import Home from './Home';

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={ ()=> <Home /> }/>
                    <Route exact path="/companies" render={() =>  <Companies /> }/>
                    <Route exact path="/companies/:name" render={ (rtProps) => <Companies{...rtProps}/> }/>
                </Switch>
           
            </div>
        );
    }
}

export default Routes;