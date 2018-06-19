import React, { Component } from 'react';
import ContactList from './Components/ContactList';
import ListContact from './Components/ListContact';
import FunctionalComponent from './Components/FunctionalComponent';
class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <ContactList /> */}
      {/* <ListContact /> */}
      <FunctionalComponent />
      </div>
    );
  }
}

export default App;
