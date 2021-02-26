import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? '#F2594B' : '#5E8C5D'};
  color: white;
  font: inherit;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  &:hover {
    background-color: ${props => props.alt ? '#F27E7E' : '#97BF7A'};
    color: black;
  },
  &:active {
    outline: 0;
    border: none;
  }, 
  &:focus {
    outline: 0;
    border: none;
  }
`;

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

    // TODO: **Note** Dynamically adding classes with javascript
    // to use, call .join(' ') on the array of classNames
    let classes = [];
    if (this.state.persons.length <= 2){ 
      classes.push('red');
    } 
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working! Click on someone to destory them!</p>
        <StyledButton alt={this.state.personsVisible} onClick={this.togglePersonsHandler}>
          Toggle Person List
        </StyledButton>
        {personsList}
      </div>
    );
  }

}

export default App;
