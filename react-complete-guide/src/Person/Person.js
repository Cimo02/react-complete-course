import React from 'react';
import styled from 'styled-components';

const PersonDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    border-radius: 20px;
    background-color: rgba(217, 210, 211, 1);
    color: rgba(13, 13, 13, 1);

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = (props) => {
    return(
        <PersonDiv>
            <h4 onClick={props.click}>Hi I'm {props.name}, I am {props.age} years old!</h4> 
            <p onClick={props.click}>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </PersonDiv>
    );
}

export default person;