import React, { Component } from 'react'
import GoogleApiComponent from 'google-maps-react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

export class Container extends React.Component {
    render() {
        const style = {
            width: '100vw',
            height: '100vh'
          }

      if (!this.props.loaded) {
        return <div>Loading...</div>
      }
      return (
          <div style={style}>
            <Map 
                google={this.props.google} 
                style={style}
            />
          </div>
      )
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAVcvtwNGlsHF1Rqayx3Mbzneiz_4dUBzc'
  })(Container)

