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
    render(){
        // console.log('Props', this.props)
        let showingContacts
        if (this.state.query) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i')
            showingContacts = this.props.contacts.filter((contact) => match.test(contact.name))
        } else {
            showingContacts = this.props.contacts
        }

        showingContacts.sort(sortBy('name'))

        return(
            <div className="search-contact">
            <div className="search-contact-top">
            <input 
              className='search'
              type='text'
              placeholder='Search contacts'
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)} 
              />
            </div>
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
                    <button onClick={() => this.props.onDeleteContact(list)} className='contact-remove'>
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