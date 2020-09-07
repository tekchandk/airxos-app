import './App.css'
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
import Map from './pages/Map';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Locations';
import Navbar from './components/Navbar';
import Locations from './pages/Locations';
import Login from './pages/Login';


const useStyles = theme => ({
  root: {
    flexGrow: 1,
    boxShadow: "none",
    background: "#cccccc",
    alignItems: 'center'

  },
  menuButton: {
    background: '#103e53',
    color:'white',
    marginLeft: 'auto',
      marginRight: 'auto',
      marginTop:'200',
      display: "flex",
  },
  title: {
    flexGrow: 1,
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    height: 80
  },
  textField: {
      marginLeft: 'auto',
      marginRight: 'auto',            
      paddingBottom: 0,
      marginTop: 200,
      alignItems:'center',
      display: "flex",
      justifyContent: "center",
      fontWeight: 500
  }
});


  class App extends React.Component {
      constructor (props) {
        super(props);
        this.state = {
          username: '',
          password:''
        };
    }

    handleClick(event) {
    fetch("http://localhost:3001/login", {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    username: this.state.username,
    password: this.state.password})}
    )
    .then(response => {
        console.log(response);
        if(response.status === 200){
        console.log("Login successfull");
        
        } 
        else if(response.status === 204){
          console.log("Username password do not match");
          alert("username password do not match")
          }
          else{
          console.log("Username does not exists");
          alert("Username does not exist");
          }
          })
          .catch(error => {
          console.error(error);
          ReactDOM.render(
            <React.StrictMode>
              <Map />
            </React.StrictMode>,
            document.getElementById('root')
          );
          });
    };
    
  
  render () {
    const {classes} = this.props;
    console.log(this.props);
  return (
    <Router>
    <Switch>
    <div >
      <Navbar/>
      <Route path='/login' exact component={Login} />
      <Route path='/map' component={Map} />
      <Route path='/locations' component={Locations} />
  </div>
  </Switch>

  </Router>
  )
  }
}

export default withStyles(useStyles)(App);


