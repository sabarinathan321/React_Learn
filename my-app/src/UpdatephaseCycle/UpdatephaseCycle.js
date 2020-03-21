import React, { Component } from 'react';
import './UpdatephaseCycle.css';
let update;
class UpdatephaseCycle extends Component {
  constructor(props){
    super(props);
    
    this.state = {};
  }
  shouldComponentUpdate(newProps, newState) {
    // if(newProps <= 3) {
    //   console.log('new props------- false', JSON.stringify(newProps));
    //   return false
    // } else {
    //   console.log('new props------- true', JSON.stringify(newProps));
    //   return true
    // }
    
    return true
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('previous props-------', JSON.stringify(prevProps));
    update = <h1>component gets updated</h1>
  }
  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
     <React.Fragment>
       <label>Time Elapsed in UpdatephaseCycle : {this.props.updateTime} </label>
       {update}
     </React.Fragment>
    );
  }
}

export default UpdatephaseCycle;