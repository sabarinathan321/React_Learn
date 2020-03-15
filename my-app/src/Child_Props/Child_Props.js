import React, { Component } from 'react';
import './Child_Props.css';

class Child_Props extends Component {
  constructor(props){
    super(props);
    this.state = {
      childName: this.props.name
    };
  }
  update = () => {
    if(this.props.name === 'sabari') {
      var newValue = 'sab'
    } else {
      var newValue = 'sabari'
    }
    this.props.nameUpdate(this.state.childName);
    this.setState({childName:newValue})
  }  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <React.Fragment>
        <label> name in child: {this.state.childName}</label>
        <button onClick = {this.update}>Update Name</button>
      </React.Fragment>
    );
  }
}

export default Child_Props;