import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = { searchTerm: ""};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt){
        this.setState({ [evt.target.name]: evt.target.value })
    }


    render() {
        return (
            <div>
                <form >
                    <input name='searchTerm' onChange={this.handleChange} value={this.state.searchTerm} />
                    <button>Submit</button>

                </form>
            </div>
        );
    }
}

export default Search;