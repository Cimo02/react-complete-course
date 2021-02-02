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
    otherState: 'some other value',
    personsVisible: false,
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Tyler', age: 33 },
        { name: event.target.value, age: 32 },
        { name: 'Jamie', age: 30 }
      ]
    });
  }

  togglePersonsHandler = () => {
    // toggle 'personsVisible' boolean variable
    this.setState({ personsVisible: !this.state.personsVisible });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '5px',
    };

    // check the value of state.personsVisible before the return statement
    let personsList = null;
    if (this.state.personsVisible) {
      personsList = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, "Tyler!")}>Title: Software Developer</Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}>Title: Teacher</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}>Title: Artist</Person>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Person List</button>
        {personsList}
      </div>
    );
  }
}

export default App;
