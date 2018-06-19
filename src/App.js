import React, { Component } from 'react';
import ContactList from './Components/ContactList';
import ListContact from './Components/ListContact';
class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <ContactList /> */}
      <ListContact />
      </div>
    );
  }
}

export default App;
