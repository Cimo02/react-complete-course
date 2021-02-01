import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Tyler Ciarmataro', age: 23 },
      { name: 'Meghan Hubbard', age: 22 },
      { name: 'Jamie Ciarmataro', age: 20 },
    ],
    otherState: 'some other value',
  }
  
  switchName = () => {
    //console.log("Name was switched!");
    // DON'T DO THIS: this.state.persons[0].name = "Tyler"
    this.setState({
      persons: [
      { name: 'Tyler', age: 23 },
      { name: 'Meghan', age: 22 },
      { name: 'Jamie', age: 20 },
    ],});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a React App!</h1>
        <p>This is really working!</p>
        <button onClick={this.switchName}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Games/Puzzles</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: TV/Movies</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies: Art</Person>
      </div>
    );
  }
}

export default App;
