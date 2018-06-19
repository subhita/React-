import React, { Component } from 'react';
import Lists from './List';

export default class ListContact extends Component{
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
    render(){
        return(
            <div className="list-contact">
            <Lists contacts={this.state.contacts} />
            </div>
        );
    }
}