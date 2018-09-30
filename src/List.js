import React, { Component } from 'react'
import GoogleApiComponent from 'google-maps-react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

class List extends React.Component {
    render() {
        const style = {
            width: '20vw',
            height: '100vh'
          }


      return (
            <ul className='side-list' >
                <li>One__________________</li>
                <li>Two___________________</li>
                <li>Three</li>
                <li>Four</li>
            </ul>
      )
    }
  }
  


export default List