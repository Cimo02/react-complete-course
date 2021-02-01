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
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a React App!</h1>
        <p>This is really working!</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Games/Puzzles</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: TV/Movies</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies: Art</Person>
      </div>
    );
  }
}

export default App;
