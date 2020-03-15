import React from 'react';
import './Parent_Props.css';
import Child_Props from '../Child_Props/Child_Props';
import Child_node_children from '../Child_node_children/Child_node_children';
import Defaultprops from '../DefaultProps/DefaultProps';
class Parent_Props extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'sabari'
    };
  }

  nameUpdate = (newName) => {
    this.setState({name:newName})
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
        <label>Name : {this.state.name}</label>
        <br/><Child_Props name = {this.state.name} nameUpdate = {this.nameUpdate}/>
        <br/> <Child_node_children>
            <li>List element</li>
            <h3>Heading element</h3>
            <p>Paragraph element</p>
            <span>Span element</span>
        </Child_node_children>
        <Defaultprops element2 = 'React' element1 = 'Hello' />
        <Defaultprops element2 = 'React'/>
        <Defaultprops element1 = 'Hello' />
        <Defaultprops />
      </React.Fragment>
    );
  }
}

export default Parent_Props;