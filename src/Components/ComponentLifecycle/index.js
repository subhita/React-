import React, { Component } from 'react';
import Lists from './List';
import * as ContactsAPI from './../../utils/ContactsAPI';

export default class ComponentLifyCycle extends Component{
    state = {
        contacts: []
    }

    componentDidMount() {
        ContactsAPI.getAll().then((contacts) => {
            this.setState({ contacts })
        })
    }

    removeContact = (contact) => {
        this.setState((state) => ({
         contacts: state.contacts.filter((c) => c.id !== contact.id)
        }))
    }
    render(){
        return(
            <div className="list-contact">
            <Lists onDeleteContact={this.removeContact} contacts={this.state.contacts} />
            </div>
        );
    }
}