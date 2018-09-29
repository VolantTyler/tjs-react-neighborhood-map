import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './Container'

// starter code for Google Maps API from https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/

class App extends Component {

  showList = () =>{
    const list = document.getElementById('mobile-slider-list');
    list.toggleClass('open');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Start Here</h1>
          <button 
            text='Search List'
            onClick={() => this.showList()}
          >Search List</button>
        </header>
        <Container />
      </div>
    );
  }
}

export default App;
