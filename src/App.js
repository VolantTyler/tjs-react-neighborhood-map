import React, { Component } from 'react';
import 'jquery';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import logo from './logo.svg';
import './App.css';
import Container from './Container'
import NavBar from './NavBar'
import { findDOMNode } from 'react-dom';
import {SideNav, Button, SideNavItem} from 'react-materialize'

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
          <Button>SIDE NAV DEMO</Button>
          {/* <button 
            text='Search List'
            onClick={() => this.showList()}
          >Search List</button> */}
        </header>
        <NavBar />
        <SideNav
          trigger={<Button>SIDE NAV DEMO</Button>}
          options={{ closeOnClick: true }}
          >
          <SideNavItem userView
            user={{
              background: 'img/office.jpg',
              image: 'img/yuna.jpg',
              name: 'John Doe',
              email: 'jdandturk@gmail.com'
            }}
          />
          <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
          <SideNavItem href='#!second'>Second Link</SideNavItem>
          <SideNavItem divider />
          <SideNavItem subheader>Subheader</SideNavItem>
          <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
        </SideNav>
        <Container />
      </div>
    );
  }
}

export default App;
