import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import  {withStyles} from '@material-ui/styles';
import { BrowserRouter as Router, 
  Switch, 
  Redirect, 
  Route 
} from 'react-router-dom';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import { ButtonBase } from '@material-ui/core';

mapboxgl.accessToken = 'pk.eyJ1IjoidGVrY2hhbmRrIiwiYSI6ImNrZWcxNmMwbDB2dnIzNnQ1anltdW51em8ifQ.h9V01lcXMbwez5ok2lOW3Q';


const styles = ({
  mapContainer: {
    position: 'absolute',
      height: '100%',
      width: '100%'
  },

  textureButtonIcon: {
      display: 'inline',
      verticalAlign: 'middle'
  }
});

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};


export class Map extends React.Component {
    

    constructor(props) {
      super(props);
      this.state = {
        lng: 60.1398,
        lat: 27.6094,
        zoom: 5,
        clickedCount: 0,
        };
    }
    
  


    componentDidMount() {
        this.map = new mapboxgl.Map({
        container: this.mapContainer, // container id
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.props.lng, this.props.lat],
        zoom: this.state.zoom,
        minZoom: window.ReactNativeWebView ? 8 : 0,
        logoPosition: 'top-right',
        interactive: true,
        doubleClickZoom:true,
        keyboard:false,
        dragPan:true,
        dragRotate:true,
        touchZoomRotate:false,
        scrollZoom:true,
        maxTileCacheSize: 0,
        initialScale:1,
        maximumScale:1,
        userScalable:'no',
        attributionControl: true
        });
       this.map.addControl(new mapboxgl.NavigationControl(), 'top-left');
       this.map.addControl(new mapboxgl.FullscreenControl());

         
        // Add geolocate control to the map.
        this.map.addControl(
          new mapboxgl.GeolocateControl({
              positionOptions: {
                  enableHighAccuracy: true
              },
              trackUserLocation: true
          })
      );
    
      //   navigator.geolocation.getCurrentPosition((position) => {
      //     console.log(position.coords.latitude, position.coords.longitude)
      //     this.setState({
      //       lng: position.coords.latitude,
      //       lat: position.coords.longitude,
      //       zoom: 15
      //   });
      // });


       var marker = new mapboxgl.Marker() // initialize a new marker
  .setLngLat([-122.25948, 37.87221]) // Marker [lng, lat] coordinates
  .addTo(this.map); // Add the marker to the map

  var geocoder = new MapboxGeocoder({ // Initialize the geocoder
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: true // Do not use the default marker style
  });
  // Add the geocoder to the map
  this.map.addControl(geocoder);
    }
      styleClick(event) {

        var layerId = 'streets-v11';
        if(this.state.clickedCount % 2 === 0) {
          layerId = 'satellite-v9'
        } else {
          layerId = 'satellite-v9'
        }
        this.setState({clickedCount: this.state.clickedCount++})
        this.map.setStyle('mapbox://styles/mapbox/' + layerId);
      }
    

    handleClick(event) {
      
      this.map.setZoom(15);
    }
  

    


    render() {


      return (
        <div className = {this.props.classes.mapContainer}>
            <div className={this.props.classes.mapContainer} ref={el => this.mapContainer = el}>
            </div>
          
        

            <Button
            variant="contained"
            color='Black'
            className='toggleStyle'
            onClick={(event) => this.styleClick(event)}>
            Style</Button>


            <div className='toggleStyle'>
              <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
            </div>
            <div >
            <Button
            variant="contained"
            color='Black'
            className='toggleStyle'
            onClick={(event) => this.handleClick(event)}>
            Zoom In</Button>
            </div>
            </div>
      );
    }
  }
 
  export default withStyles(styles, {withTheme: true})(Map);
