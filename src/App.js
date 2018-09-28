import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './Container'
import List from './List'

// starter code for Google Maps API from https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Start Here</h1>
        </header>
        <Container />
      </div>
    );
  }
}

export default App;
