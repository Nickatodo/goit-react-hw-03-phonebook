import React, { Component } from 'react';
import FormContac from './FormContac';
import FilterContact from './FilterContact';
import ListContac from './ListContac';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: JSON.parse(localStorage.getItem('contacts')),
      filter: '',
    };
    this.setNewState = this.setNewState.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  setNewState(newState) {
    this.setState({ contacts: newState });
  }

  handleQueryChange(filter) {
    this.setState({ filter });
  }

  deleteContact(id) {
    let oldContacts = [...this.state.contacts];
    const updateContacts = oldContacts.filter(contact => contact.id !== id);
    this.setState({ contacts: updateContacts });
    localStorage.setItem('contacts', JSON.stringify(updateContacts));
  }

  render() {
    const { contacts, filter } = this.state;
    let filtrado = [];
    if (contacts != null) {
      filtrado = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }

    return (
      <>
        <h1>Phonebook</h1>
        <FormContac content={this.state} setState={this.setNewState} />
        <h2>Contacts</h2>

        <FilterContact onQueryChange={this.handleQueryChange} />
        <ListContac contacts={filtrado} onIdDelete={this.deleteContact} />
      </>
    );
  }
}
