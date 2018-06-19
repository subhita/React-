import React, { Component } from 'react';
import Contacts from './Contact';
export default class ContactList extends Component{
    render(){
        return(
            <div className="contact-list">
            <Contacts contacts={[
            { name: 'Michael' },
            { name: 'Ryan' },
            { name: 'Tyler' }  
            ]} />
            <Contacts contacts={[
                { name: 'Amanda' },
                { name: 'Rechard' },
                { name: 'Max' } 
            ]} />
      </div>
        );
    }
}