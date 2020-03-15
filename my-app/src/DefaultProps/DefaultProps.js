import React, { Component } from 'react';
import './DefaultProps.css';

class DefaultProps extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

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
        <label>{this.props.element1}</label>
        <label>{this.props.element2}</label>
      </React.Fragment>
    );
  }
}

DefaultProps.defaultProps  = {
  element1: 'Come-On',
  element2: 'World'
}


export default DefaultProps;