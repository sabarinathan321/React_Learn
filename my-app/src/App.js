import React from 'react';
import logo from './logo.svg';
import react from './image/react.PNG'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonReact from '@material-ui/core/Button';
import Label from 'react-bootstrap/FormLabel';
import Typography from '@material-ui/core/Typography';
import './App.css';
import Parent_Props from './Parent_props';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 0,
      quantity: 0,
      time: 0,
      Time_button: 'Start Time'
    }
  }
  onRender = () => {
    this.setState({price:this.state.price+5})
    if(this.state.price===5) {
      this.setState({quantity:100})
    }
  }
  start = () => {
    this.setState({time:this.state.time+1})
  }
  handleClick = () => {
    if(this.state.Time_button === 'Start Time'){
      this.interval = setInterval(this.start , 1000);
      this.setState({Time_button:'Stop Time'})
    } else {
      clearInterval(this.interval);
      this.setState({Time_button:'Start Time'})
    }
  }
  render() {
    return (<React.Fragment>
      <Label>Price</Label><br></br>
      <Label>{this.state.price}</Label><br></br>
      <Label>quantity</Label>
      <Label>{this.state.quantity}</Label>
      <ButtonReact variant='secondary' onClick = {this.onRender}> update </ButtonReact><br></br>
    <Label>Time updating {this.state.time}</Label><br></br>
    <ButtonReact variant ='warining' onClick = {this.handleClick} > {this.state.Time_button}</ButtonReact>
     <br/> <Parent_Props time = {this.state.time}/>
    </React.Fragment>

    )
  }
}


export default App;
