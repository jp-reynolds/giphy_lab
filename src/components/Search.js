import React, { Component } from 'react';
import '../App.css';

class Search extends Component {

  constructor(){
    super()
    this.state = {
      search: ''
    }
    //making sure that the this variable equals the actual component 
    //within the defintion of the these functions
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      search: event.target.value
    })
  }

  onFormSubmit(event) {

    alert("submit button clicked event: " + event)

    event.preventDefault()
    let search = this.state.search;
    this.props.search
    this.setState({
      search: ""
    })
  }




  render() {
    return (
      <div className="App">
        <form onSubmit={this.onFormSubmit} className="App">
          <input 
            type="text" 
            placeholder="Search Giphy here..."
            value={this.state.search}
            onChange={this.onInputChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Search;