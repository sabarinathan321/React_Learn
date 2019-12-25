import React from 'react';
import logo from './logo.svg';
import react from './image/react.PNG'
import './App.css';
class App extends React.Component {
  render() {
   let x = 30, y = 20
   let trueStyle = {
     color: 'green',
     backgroundColor: 'gray'
   }
   let falseStyle = {
    color: 'red',
    backgroundColor: 'gray'
  }
    return (<React.Fragment>
  <h1 style = {x > y ? trueStyle : falseStyle}>{x}{'>'}{y}{" "}{x > y ? 'true' : 'false'}</h1>
    </React.Fragment>)
  }
}


export default App;
