import React, { Component } from 'react';
import './Child_node_children.css';

class Child_node_children extends Component {
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
    React.Children.map(this.props.children, (childs) => {
      console.log('child', childs.props.children);
    })
    return (<React.Fragment>
      <ul>
        {this.props.children}
      </ul>
      </React.Fragment>
    );
  }
}

export default Child_node_children;