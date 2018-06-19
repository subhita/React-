import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Lists extends Component{
    render(){
        // console.log('Props', this.props)
        const contact = this.props.contacts
        return(
            <ol className="lists">
            {contact.map((list) => (
                <li key={list.id} className='contact-list-item'>
                    <div className='contact-avatar' style={{
                    backgroundImage: `url(${list.avatarURL})`
                    }}/>
                    <div className='contact-details'>
                        <p>{list.name}</p>
                        <p>{list.email}</p>
                    </div>
                    <button className='contact-remove'>
                      Remove
                    </button>
                </li>
                ))}
            </ol>
        );
    }
}

Lists.propTypes = {
    contacts: PropTypes.array.isRequired
}