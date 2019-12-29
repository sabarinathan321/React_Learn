import React from 'react';
import logo from './logo.svg';
import react from './image/react.PNG'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonReact from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './App.css';
class App extends React.Component {
  render() {
    let x = 30, y = 20, element = null;
    let jsonArray = [
      { firstName: 'sab', age: 21 },
      { firstName: 'sound', age: 22 }
    ]
    let rowArray = [];
    for (var i = 0; i < jsonArray.length; i++) {
      var row = (
        <tr>
          <td>{jsonArray[i].firstName}</td>
          <td>{jsonArray[i].age}</td>
        </tr>
      )
      rowArray.push(row);
    }
    if (x > y) {
      element = <h1>x is greater</h1>
    }
    else {
      element = <h1>y is greater</h1>
    }
    return (<React.Fragment>
      {element}
      <table style={{ width: '60%' }} className='table'>
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {rowArray}
        </tbody>
      </table>
      <button class="buttonStyle">Table Class Style</button>
      <button className="btn btn-success">Table bootstrap</button>
      <Button variant="warning">React bootstrap </Button>
      <ButtonReact variant="outline-success">Material UI</ButtonReact>
      <Typography variant="h4" gutterBottom>Welcome to React gutterBottom</Typography>
    </React.Fragment>

    )
  }
}


export default App;
