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
          <div style={style}>
            <ol>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
            </ol>
          </div>
      )
    }
  }
  


export default List