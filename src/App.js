import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons:[
      {id :"sdcnso",name:'Max', age:'30'},
      {id :"djvnds",name:'Manu',age:'29'},
      {id :"dvjnsdjn",name:'Kanchan',age:'22'}
    ],
    showName : false
  } 
  
  switchNameHandler = (newName) => {
    this.setState({persons: [
      {name: newName, age:'30'},
      {name:'Manu',age:'29'},
      {name:'Kanchan',age:'23'}     
    ]
    }) 
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

  toggleNameRenderer = () => {
    const currentName = this.state.showName;
    this.setState({showName: !currentName});
  }

  deleteNameHandeller = (personIndex) =>{
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor : 'green',
      color: 'white',
      font:'inherit', 
      border: '1x solid blue',
      padding: '8px',
      cursor :'pointer',
    };

    let person = null;
    if(this.state.showName)
    {
      person = (
          <div>
            {this.state.persons.map( (person,index) => {
              return <Person
              click = {() => this.deleteNameHandeller(index)}
              name = {person.name}
              age = {person.age}
              key = {person.id}
              changed = {(event) => this.nameChangeHandeller(event,person.id)}/>
            })} 

          </div>
        );

        style.backgroundColor =  'Red';
    }

    let Classes = [];
    if(this.state.persons.length <= 2)
    {
      Classes.push('red');
    }
    if(this.state.persons.length <= 1)
    {
      Classes.push('bold');
    }



    return (

        <div className="App">
          <h1>This is React Application</h1>
          <p className = {Classes.join(' ')}>This is working</p>
          <button
            style = {style}
            onClick = {() => this.toggleNameRenderer() }>Switch name</button>
            {person}
        </div>

    );
  }
}

export default App;
