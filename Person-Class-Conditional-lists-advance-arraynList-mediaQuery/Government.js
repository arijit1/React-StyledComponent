import React, { Component } from 'react';
import Person from './Person';
import styled from 'styled-components';

const StyleButton = styled.button`
      background-color: green;
      font: inherit;
      padding: 8px;

      &:hover {
        background-color: lightblue;
        color: blue;
      }
`;

class GovernmentsClassListAdvanceStyledComponent extends Component {
  constructor() {
    super();
    this.state = {
      person: [
        { id: 'a1', name: 'Arijit', age: 22 },
        { id: 'a2', name: 'Fenink', age: 25 },
        { id: 'a3', name: 'Alexiy', age: 21 },
      ],
      otherState: "some other value",
      showPerson: false
    }
  }
  
  toggler = () => {

    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }
  nameChangedHandler = (event, id) => {
    console.log(id);
  }
  deletePerson = (delIndex) => {
    const persons = [...this.state.person];
    persons.splice(delIndex, 1); //at position delIndex remove 1 item
    this.setState({ person: persons })
  }


  render() {

    let person = null;

    if (this.state.showPerson) {

      person = (
        <div>
          {this.state.person.map((person, index) => {
            return <Person
              click={() => this.deletePerson(index)}
              status={true}
              name={person.name}
              age={person.age}
              keys={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <p>Conditional adv Features with styledComponents package</p>
        <StyleButton alt={this.state.showPerson} onClick={() => this.toggler()}>Toggle</StyleButton>
        {person}
      </div>
    );
  }

}
export default GovernmentsClassListAdvanceStyledComponent;