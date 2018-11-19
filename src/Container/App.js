import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
  

class App extends Component {
  state = {
    persons:[
      {id :"sdcnso",name:'Max', age:'30'},
      {id :"djvnds",name:'Manu',age:'29'},
      {id :"dvjnsdjn",name:'Kanchan',age:'22'}
    ],
    showName : false
  } 
  
  nameChangeHandeller = (event,id) => {
    const personIndex = this.state.persons.findIndex( p => { 
        return p.id === id
      });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons }); 
  }


  deleteNameHandeller = (personIndex) =>{
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  toggleNameRenderer = () => {
    const currentName = this.state.showName;
    this.setState({showName: !currentName});
  }

  render() {

    let person = null;
    if(this.state.showName)
    {
      person = (
          <div>
            <Persons 
            persons = {this.state.persons}
            clicked = {this.deleteNameHandeller}
            changed = {this.nameChangeHandeller}/>
          </div>
        );
        // style.backgroundColor =  'Red';
    }

    return (

        <div className="App">
            <Cockpit 
            appTitle = {this.props.appTitle}
            toggleName = {this.toggleNameRenderer}
            persons = {this.state.persons}
            />
            {person}
        </div>

    );
  }
}

export default App;
