import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ContactList from './Components/ContactList';
import ListContact from './Components/ListContact';
import FunctionalComponent from './Components/FunctionalComponent';
import StateComponent from './Components/StateComponent';
import SearchContact from './Components/SearchContact';
import ComponentLifyCycle from './Components/ComponentLifecycle';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      {/* <ContactList /> */}
      {/* <ListContact /> */}
      {/* <FunctionalComponent /> */}
      {/* <StateComponent /> */}
      {/* <SearchContact /> */}
      <ComponentLifyCycle />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
