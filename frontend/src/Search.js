import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.triggerSearch(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  render() {
    return (
      <div className='Search'>
        <form onSubmit={this.handleSubmit}>
          <input name='searchTerm'
                 onChange={this.handleChange}
                 value={this.state.searchTerm} />
          <button>Submit</button>

        </form>
      </div>
    );
  }
}

export default Search;