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
  nameChangedHandler = (event, id) => {
    // ALWAYS make sure you copy the state data you want to manipulate first because else it will just be a pointer
    const personIndex = this.state.persons.findIndex(p => { return p.id === id; });
    const person = {
      ...this.state.persons[personIndex]
    };
    // change the persons name
    person.name = event.target.value;
    // create a copy of persons array and update it
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // update our persons state
    this.setState({ persons: persons });
  }

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
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
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
