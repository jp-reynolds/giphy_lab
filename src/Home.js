import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World</h1>
        </header>
        
        <Search/>
      </div>
    );
  }
}

export default Home;
