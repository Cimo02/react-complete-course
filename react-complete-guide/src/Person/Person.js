import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    // if the window size is larger than 500px, lock the width to 450px
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return(
        <div className='Person' style={style}>
            <h4 onClick={props.click}>Hi I'm {props.name}, I am {props.age} years old!</h4> 
            <p onClick={props.click}>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default Radium(person);