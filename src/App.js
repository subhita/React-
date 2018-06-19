import React, { Component } from 'react';
import ContactList from './Components/ContactList';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ContactList contacts={[
    { name: 'Michael' },
    { name: 'Ryan' },
    { name: 'Tyler' }  
]} />
      <ContactList contacts={[
        { name: 'Amanda' },
        { name: 'Rechard' },
        { name: 'Max' } 
        ]} />
      </div>
    );
  }
}

export default App;
