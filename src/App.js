import React, { Component } from 'react';
import ContactList from './Components/ContactList';
import ListContact from './Components/ListContact';
import FunctionalComponent from './Components/FunctionalComponent';
import StateComponent from './Components/StateComponent';
import SearchContact from './Components/SearchContact';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <ContactList /> */}
      {/* <ListContact /> */}
      {/* <FunctionalComponent /> */}
      {/* <StateComponent /> */}
      <SearchContact />
      </div>
    );
  }
}

export default App;
