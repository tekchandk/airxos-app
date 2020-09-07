import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import  {withStyles} from '@material-ui/styles';

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

class Login extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        username: '',
        password:''
      };
  }
  render () {
    const {classes} = this.props;
    console.log(this.props);
  return (
      <div>
<div>
    <TextField
    placeholder="User Name"
    type="text"
    variant="outlined"
    className={classes.textField}
    onChange = {(event,newValue) => this.setState({username:event.target.value})}/>
</div>

<div>
<TextField
style={{marginTop: 30}} 
    placeholder="Password"
    type="password"
    autoComplete="current-password"
    variant="outlined"
    className={classes.textField}
    onChange = {(event,newValue) => this.setState({password:event.target.value})}/>
</div>

<div>
<Button style={{marginTop: 30}} className={classes.menuButton} onClick={(event) => this.handleClick(event)} color="inherit">Submit</Button>
</div>
</div>
  )}};

export default withStyles(useStyles)(Login);
