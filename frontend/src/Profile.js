import React, { Component } from 'react';
import Alert from './Alert';
import './Profile.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = this.setDefaultStates();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setDefaultStates(){
    const { username, email, first_name, last_name, photo_url } = this.props.currUser;

    return { username, email, firstname: first_name, lastname: last_name, photoUrl: photo_url, error: false };
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    await this.props.triggerUpdate(this.state);
    this.setState(() => this.setDefaultStates());
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  render() {
    return (
      <div className='Profile'>
        <h2>Profile</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='username'><strong>Username</strong></label>
          <p>{this.state.username}</p>

          <label htmlFor='firstname'>First name</label> <br/>
          <input id='firstname'
                 name='firstname'
                 onChange={this.handleChange}
                 value={this.state.firstname} /> <br/>

          <label htmlFor='lastname'>Last name</label> <br/>
          <input id='lastname'
                 name='lastname'
                 onChange={this.handleChange}
                 value={this.state.lastname} /><br />

          <label htmlFor='email'>Email</label> <br />
          <input id='email'
                 name='email'
                 onChange={this.handleChange}
                 value={this.state.email} /><br />

          <label htmlFor='photoUrl'>Photo URL</label> <br/>
          <input id='photoUrl'
                 name='photoUrl'
                 onChange={this.handleChange}
                 value={this.state.photoUrl} /><br />

          <label htmlFor='password'>Password</label> <br/>
          <input type='password'
                 id='password'
                 name='password'
                 onChange={this.handleChange}
                 value={this.state.password} /><br />

          {this.state.error ? <Alert /> : null}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;