import React, { Component } from 'react';
import './LifeCycle.css';
import UpdatephaseCycle from '../UpdatephaseCycle/UpdatephaseCycle'
class LifeCycle extends Component {
  constructor(props){
    super(props);
    this.state = {
      timeElapse: 0
    };
  }

  // componentWillMount(){}
  componentDidMount(){
    this.interval = setInterval(this.start, 1000)
  }
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  start = () => {
    this.setState({timeElapse:this.state.timeElapse + 1})
  }

  render() { 
    return (<React.Fragment>
    <label>Seconds Elapsed in mount Phase: {this.state.timeElapse}</label>
    <UpdatephaseCycle updateTime = {this.state.timeElapse} />
    </React.Fragment>
    );
  }
}

export default LifeCycle;