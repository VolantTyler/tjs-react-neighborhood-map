import React, { Component } from 'react'
import GoogleApiComponent from 'google-maps-react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import List from './List'
import {Row, Col} from 'reactstrap'


export class Container extends React.Component {
    render() {
        const style = {
            //width: '100vw',
            height: '100vh',
            top: '60px'
          }


      if (!this.props.loaded) {
        return <div>Loading...</div>
      }
      return (
          <div >
            {/* <div id='mobile-slider-list'>
              <List />
            </div> */}
            {/* <Row>
              <Col className='hidden-xs col-sm-3 side-list'>
                <List />
              </Col>
              <Col className='col-xs-12 col-sm-9'> 
                <Map 
                    google={this.props.google} 
                    style={style}
                />
              </Col>
            </Row> */}

                {/* <List /> */}
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

