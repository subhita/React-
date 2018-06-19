import React, { Component } from 'react';

// const people = [
//     { name: 'Michael' },
//     { name: 'Ryan' },
//     { name: 'Tyler' }  
// ]

export default class ContactList extends Component{
    render(){
        const people = this.props.contacts;
        return(
            <ol>
                {people.map(person => (
                    <li key={person.name}>{person.name}</li>
                ))}
            </ol>
        );
    }
}