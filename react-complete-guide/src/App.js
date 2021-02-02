import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Tyler', age: 33 },
      { name: 'Meghan', age: 32 },
      { name: 'Jamie', age: 30 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Meghan Hubbard', age: 22 },
        { name: 'Jamie Ciarmataro', age: 20 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this, "Tyler Ciarmataro")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Tyler!")}>Title: Software Developer</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>Title: Teacher</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}>Title: Artist</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
