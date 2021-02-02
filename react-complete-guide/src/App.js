import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  // personsState is the actual data, and setPersonsState is the function that updates the state
  // you can use 'useState' as many times as you want in a functional component
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Tyler Ciarmataro', age: 23 },
      { name: 'Meghan Hubbard', age: 22 },
      { name: 'Jamie Ciarmataro', age: 20 },
    ]
  });
  
  const [ otherState, setOtherState ] = useState({
    otherState: 'some other state?',
  });

  console.log(personsState, otherState);

  const switchName = () => {
    // console.log("Name was switched!");
    // DON'T DO THIS: this.state.persons[0].name = "Tyler"
    /* When using Hooks you need to copy all information you don't want to delete, 
      because 'setStateValues' replaces state variables */
    setPersonsState({
      persons: [
        { name: 'Tyler', age: 23 },
        { name: 'Meghan', age: 22 },
        { name: 'Jamie', age: 20 },
      ],
      otherState: personsState.otherState,
    });
  }

  return (
    <div className="App">
      <h1>Hi! I'm a React App!</h1>
      <p>This is really working!</p>
      <button onClick={switchName}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies: Games/Puzzles</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: TV/Movies</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My Hobbies: Art</Person>
    </div>
  );
}

export default app;
