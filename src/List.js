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
                <li>
                    <h1>Restaurant Name</h1>
                    <p>
                        123 Main Street
                        Omaha NE 68130
                    </p>
                    <p>
                        123-456-7890
                    </p>
                </li>
                <li>
                <h1>Restaurant Name</h1>
                    <p>
                        123 Main Street
                        Omaha NE 68130
                    </p>
                    <p>
                        123-456-7890
                    </p>
                </li>
                <li>
                <h1>Restaurant Name</h1>
                    <p>
                        123 Main Street
                        Omaha NE 68130
                    </p>
                    <p>
                        123-456-7890
                    </p>
                </li>
                <li>
                <h1>Restaurant Name</h1>
                    <p>
                        123 Main Street
                        Omaha NE 68130
                    </p>
                    <p>
                        123-456-7890
                    </p>
                </li>
            </ul>
      )
    }
  }
  


export default List