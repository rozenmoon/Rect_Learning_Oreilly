import React from 'react';
import './Cockpit.css'

const Cockpit = (props) => {
    let style = {
        backgroundColor : 'green',
        color: 'white',
        font:'inherit', 
        border: '1x solid blue',
        padding: '8px',
        cursor :'pointer',
      };

    let Classes = [];
    if(props.persons.length <= 2)
    {
      Classes.push('red');
    }
    if(props.persons.length <= 1)
    {
      Classes.push('bold');
    }

    let styleChangeHandeller = () => {
        // style.backgroundColor = 'red';
        props.toggleName();
    }


    return (
        <div>
            <h1>{props.appTitle}</h1>
            <p className = {Classes.join(' ')}>This is working</p>
            <button
            style = {style}
            onClick ={() => styleChangeHandeller()}>Switch name</button>
        </div>
    );
};

export default Cockpit;
