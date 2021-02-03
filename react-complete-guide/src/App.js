import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // 'App' Variables
  state = {
    persons: [
      { id: '01', name: 'Octane', age: 5 },
      { id: '02', name: 'Breakout', age: 3 },
      { id: '03', name: 'Dominus', age: 4 }
    ],
    otherState: 'some other value',
    personsVisible: false,
  };

  // 'App' Methods ---
  // nameChangedHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       { name: 'Octane', age: 6 },
  //       { name: event.target.value, age: 4 },
  //       { name: 'Dominus', age: 5 }
  //     ]
  //   });
  // }

  deletePersonHandler = (personIndex) => {
    /* both lines copy the array instead of creating a pointer */
    //const updatedPersons = this.state.persons.slice(); 
    const updatedPersons = [...this.state.persons];
    updatedPersons.splice(personIndex, 1);

    this.setState({ persons: updatedPersons });
  }

  togglePersonsHandler = () => {
    // toggle 'personsVisible' boolean variable
    this.setState({ personsVisible: !this.state.personsVisible });
  }

  // 'App' Render Method ---
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '5px',
    };

    // check the value of state.personsVisible before the return statement! It's best practice!
    let personsList = null;
    if (this.state.personsVisible) {
      personsList = (
        <div>
          {this.state.persons.map((person, index) => {
            return(
              <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
          {/*
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
          */}
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working! Click on someone to destory them!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Person List</button>
        {personsList}
      </div>
    );
  }

}

export default App;
