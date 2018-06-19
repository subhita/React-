import React, { Component } from 'react';

const Lists = (props) => (
            <ol className="lists">
            {props.contacts.map((list) => (
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

export default Lists;         