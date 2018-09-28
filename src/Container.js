import React, { Component } from 'react'
import GoogleApiComponent from 'google-maps-react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import List from './List'
import {Row, Col} from 'reactstrap'


export class Container extends React.Component {
    render() {
        const style = {
            //width: '100vw',
            height: '100vh'
          }

      if (!this.props.loaded) {
        return <div>Loading...</div>
      }
      return (
          <div >
            <Row>
              <Col xs='3'>
                <List />
              </Col>
              <Col xs='9'>
                <Map 
                    google={this.props.google} 
                    style={style}
                />
              </Col>
            </Row>
          </div>
      )
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAVcvtwNGlsHF1Rqayx3Mbzneiz_4dUBzc'
  })(Container)

