import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateContact extends Component {
    render() {
        return (
            <div>
              <Link className='close-create-contact' to='/'>Close</Link>
              <form className='create-contact-form'>
                <div className='create-contact-details'>
                  <input type='text' name='name' placeholder='Name'/>
                  <input type='text' name='email' placeholder='Email'/>
                  <button>Add Contact</button>
                </div>
              </form>
            </div>
         );
    }
}

