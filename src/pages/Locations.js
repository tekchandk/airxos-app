import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { colors } from '@material-ui/core';
import  {withStyles} from '@material-ui/styles';
import Map from './Map';
import ReactDOM from 'react-dom';
 
const list = [
  {
    id: '1',
    lat: '-25.02',
    lng: '45.06',
  },
  {
    id: '2',
    lat: '12.009',
    lng: '-23.90990',
  },
  {
    id: '3',
    lat: '-06.89899',
    lng: '-45.909',
  },
];

const useStyles = theme => ({
  button: {
    background: 'grey',
    color:'black',
    marginLeft: 'auto',
      marginBottom: 'auto',
      marginTop:'20px',
      marginLeft:'20px',
      fontSize:'450'
  }
});




class Locations extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      selectedLat:"-12.9090",
      selectedLng:"78.767868"
    }
}

handleClick(item) {
  this.setState({selectedLat: item.lat, selectedLng: item.lng});
};

render () {
  const {classes} = this.props;
return (
  <div>
  <ul>
  {list.map(item => (
    <li className={classes.button} key={item.id} onClick={()=> this.handleClick(item)}>
      <div>{item.id}.  {item.lat}, {item.lng}</div>
    </li>
  ))}
</ul>
<React.Fragment>
    <Map lat={this.state.selectedLat} lng={this.state.selectedLng}/>

</React.Fragment>
</div>

)}
};

 
export default withStyles(useStyles)(Locations);