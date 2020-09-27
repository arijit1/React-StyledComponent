import React from 'react';
import styled from 'styled-components';

const Person = (props) => {
    const StyledDiv = styled.div`
    color: blue;
    border:1px solid black;
    background-color: ${props=> props.alt ? 'yellow' : 'salmon'};

    @media (max-width: 500px) : {
      color:red;
    }
    `;

    return <>
        <StyledDiv key={props.keys}>
            <p onClick={props.click}>
                My Name is {props.name} and my age is {props.age} years old
            {props.children}</p>
            {props.status ? <> <label htmlFor={props.keys}>change Name </label>
                <input type="text" id={props.keys} onChange={props.changed} value={props.name} /></> : <></>}
        </StyledDiv>


    </>
}
export default Person;