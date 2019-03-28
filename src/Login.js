import React, { Component } from 'react';
import Alert from './Alert';
const DEFAULT_STATE_VALUES = { showLogin: true,
                               error: false,
                               username: '',
                               password: '',
                               firstname: '',
                               lastname: '',
                               email: '' };
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE_VALUES;
    this.handleChange = this.handleChange.bind(this);
    this.showLogin = this.showLogin.bind(this);
    this.showSignup = this.showSignup.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showLogin() {
    this.setState(() => ({ ...DEFAULT_STATE_VALUES, showLogin: true }));
  }

  showSignup() {
    this.setState(() => ({ ...DEFAULT_STATE_VALUES, showLogin: false }));

  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  async handleSubmit(evt){
    evt.preventDefault();
    this.state.showLogin?
    await this.props.triggerLogin(this.state) :
    await this.props.triggerSignup(this.state);
    this.props.isError ? this.setState({error: this.props.isError}): this.props.history.push('/jobs');
  }

  componentWillUnmount(){
    this.setState({ error: false });
  }


  render() {
    return (
      <div>
        <button onClick={this.showLogin}>Login</button>
        <button onClick={this.showSignup}>Sign up</button>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='username'>Username</label>
          <input id='username'
                 name='username'
                 onChange={this.handleChange}
                 value={this.state.username} /><br />

          <label htmlFor='password'>Password</label>
          <input id='password'
                 name='password'
                 onChange={this.handleChange}
                 value={this.state.password} /><br />

          {this.state.showLogin
            ?
            null
            :
            <div>
              <label htmlFor='firstname'>First name</label>
              <input id='firstname'
                     name='firstname'
                     onChange={this.handleChange}
                     value={this.state.firstname} /><br />

              <label htmlFor='lastname'>Last name</label>
              <input id='lastname'
                     name='lastname'
                     onChange={this.handleChange}
                     value={this.state.lastname} /><br />

              <label htmlFor='email'>Email</label>
              <input id='email'
                     name='email'
                     onChange={this.handleChange}
                     value={this.state.email} /><br />
            </div>
          }
          {this.state.error ? <Alert errors={this.state.error}/> : null}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;