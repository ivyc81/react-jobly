import React, { Component } from 'react';
import Alert from './Alert';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: false,
            username: '',
            password:'',
            firstname:'',
            lastname:'',
            email:'',
            photoUrl:'',};
        this.handleChange = this.handleChange.bind(this);
        this.showLogin = this.showLogin.bind(this);
        this.showSignup = this.showSignup.bind(this);
    }

    showLogin() {
        this.setState(() => ({isLogin: true}));
    }

    showSignup() {
        this.setState(() => ({isLogin: false}));
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }


    render() {
        return (
            <div>
                <h2>Profile</h2>
                <form >
                    <label htmlFor='username'>Username</label>
                    <p>FIXME usernamefrom props</p>
                    <label htmlFor='firstname'>First name</label>
                    <input id='firstname' name='firstname' onChange={this.handleChange} value={this.state.LoginTerm} /><br/>
                    <label htmlFor='lastname'>Last name</label>
                    <input name='lastname' onChange={this.handleChange} value={this.state.LoginTerm} /><br/>
                    <label htmlFor='email'>Email</label>
                    <input name='email' onChange={this.handleChange} value={this.state.LoginTerm} /><br/>
                    <label htmlFor='photoUrl'>Photo URL</label>
                    <input id='photoUrl' name='photoUrl' onChange={this.handleChange} value={this.state.LoginTerm} /><br/>
                    <label htmlFor='password'>Password</label>
                    <input id='password'name='password' onChange={this.handleChange} value={this.state.LoginTerm} /><br/>
                    {this.state.error ? <Alert /> : null}
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;