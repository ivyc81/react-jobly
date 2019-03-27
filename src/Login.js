import React, { Component } from 'react';
import Alert from './Alert';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      error: false,
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.showLogin = this.showLogin.bind(this);
    this.showSignup = this.showSignup.bind(this);
  }

  showLogin() {
    this.setState(() => ({ isLogin: true }));
  }

  showSignup() {
    this.setState(() => ({ isLogin: false }));
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }


  render() {
    return (
      <div>
        <button onClick={this.showLogin}>Login</button>
        <button onClick={this.showSignup}>Sign up</button>
        <form >
          <label htmlFor='username'>Username</label>
          <input id='username'
                 name='username'
                 onChange={this.handleChange}
                 value={this.state.userName} /><br />

          <label htmlFor='password'>Password</label>
          <input id='password'
                 name='password'
                 onChange={this.handleChange}
                 value={this.state.LoginTerm} /><br />

          {this.state.isLogin
            ?
            null
            :
            <div>
              <label htmlFor='firstname'>First name</label>
              <input id='firstname'
                     name='firstname'
                     onChange={this.handleChange}
                     value={this.state.LoginTerm} /><br />

              <label htmlFor='lastname'>Last name</label>
              <input id='lastname'
                     name='lastname'
                     onChange={this.handleChange}
                     value={this.state.LoginTerm} /><br />

              <label htmlFor='email'>Email</label>
              <input id='email'
                     name='email'
                     onChange={this.handleChange}
                     value={this.state.LoginTerm} /><br />
            </div>
          }
          {this.state.error ? <Alert /> : null}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;