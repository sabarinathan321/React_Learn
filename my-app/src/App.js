import React from 'react';
import logo from './logo.svg';
import react from './image/react.PNG'
import './App.css';

function sabTest() {
  let testingName = "nested Function"
  return (
    <h1>{testingName}</h1>
  )
}

class App extends React.Component {
  render() {
    let count = 5;
    let name = {
      firstName: 'Sabarinathan',
      lastName: 'Ayyappan'
    }
    let styles = {
      color: 'blue',
      backgroundColor: 'gray'
    }
    return (<React.Fragment>
      <h1>{count}</h1>
      <h2>{count * count}</h2>
      <h3 style={styles}>{name.firstName} 2 {name.lastName}"</h3>
      {/* <h4 Color = 'blue'>blue color</h4> */}
      {/* <h5 backgroundColor = {styles.backgroundColor}>background color</h5> */}
      <h4>{sabTest()}</h4>
    </React.Fragment>)
  }
}


export default App;
