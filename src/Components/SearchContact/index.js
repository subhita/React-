import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Lists from './List';
import CreateContact from './CreateContact';

export default class SearchContact extends Component{
    state = {
        contacts: [
            {
              "id": "ryan",
              "name": "Ryan Florence",
              "email": "ryan@reacttraining.com",
              "avatarURL": "https://pbs.twimg.com/profile_images/937382461918478336/AxXNkFRG_400x400.jpg"
            },
            {
              "id": "michael",
              "name": "Michael Jackson",
              "email": "michael@reacttraining.com",
              "avatarURL": "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.pngg"
            },
            {
              "id": "tyler",
              "name": "Tyler McGinnis",
              "email": "tyler@reacttraining.com",
              "avatarURL": "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            }
          ]
    }
    removeContact = (contact) => {
        this.setState((state) => ({
         contacts: state.contacts.filter((c) => c.id !== contact.id)
        }))
    }
    render(){
        return(
            <div className="list-contact">
            <Route exact path="/" render={() => (
                <Lists onDeleteContact={this.removeContact} contacts={this.state.contacts} />
            )} />            
            <Route path="/create" component={CreateContact} />
            </div>
        );
    }
}