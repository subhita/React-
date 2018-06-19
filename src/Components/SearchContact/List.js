import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

export default class Lists extends Component{
    state = {
        query: ''
    }
    updateQuery =(query) => {
        this.setState({query: query.trim() })
    }

    clearQuery =() => {
        this.setState({query: ''})
    }
    render(){
        // console.log('Props', this.props)
        const { contacts, onDeleteContact} = this.props
        const { query } = this.state

        let showingContacts
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingContacts = contacts.filter((contact) => match.test(contact.name))
        } else {
            showingContacts = contacts
        }

        showingContacts.sort(sortBy('name'))

        return(
            <div className="search-contact">
            <div className="search-contact-top">
            <input 
              className='search'
              type='text'
              placeholder='Search contacts'
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)} 
              />
            </div>
            {showingContacts.length !== contacts.length && (
                <div className="showing-contact">
                    <span>Now showing {showingContacts.length} of {contacts.length} total</span>
                    <button onClick={this.clearQuery}>Show All</button>
                </div>
            )}
            <ol className="lists">
            {showingContacts.map((list) => (
                <li key={list.id} className='contact-list-item'>
                    <div className='contact-avatar' style={{
                    backgroundImage: `url(${list.avatarURL})`
                    }}/>
                    <div className='contact-details'>
                        <p>{list.name}</p>
                        <p>{list.email}</p>
                    </div>
                    <button onClick={() => onDeleteContact(list)} className='contact-remove'>
                      Remove
                    </button>
                </li>
                ))}
            </ol>
            </div>            
        );
    }
}

Lists.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}