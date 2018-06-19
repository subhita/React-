import React, { Component } from 'react';
import ContactList from './Components/ContactList';
import ListContact from './Components/ListContact';
import FunctionalComponent from './Components/FunctionalComponent';
import StateComponent from './Components/StateComponent';
class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <ContactList /> */}
      {/* <ListContact /> */}
      {/* <FunctionalComponent /> */}
      <StateComponent />
      </div>
    );
  }
}

export default App;
