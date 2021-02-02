import React from 'react';

const person = (props) => {
    return(
        <div>
            <p onClick={props.click}>Hi I'm {props.name}, I am {props.age} years old!</p> 
            <p onClick={props.click}>{props.children}</p>
        </div>
    );
}

export default person;