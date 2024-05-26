import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class FormContac extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
    this.handleOnchange = this.handleOnchange.bind(this);
    this.addContact = this.addContact.bind(this);
  }

  handleOnchange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addContact() {
    let oldContacts = [];
    if (this.props.content.contacts !== null) {
      oldContacts = [...this.props.content.contacts];
    }
    let alredyContact = [];
    if (oldContacts != []) {
      alredyContact = oldContacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.name.toLowerCase())
      );
    }

    if (alredyContact.length === 0) {
      oldContacts.push({ id: nanoid(), ...this.state });
      this.props.setState(oldContacts);
      localStorage.setItem('contacts', JSON.stringify(oldContacts));
    } else {
      alert(this.state.name + ' is already in contacts.');
    }
  }

  render() {
    return (
      <>
        <form>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={this.handleOnchange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div>
            <label>Number</label>
            <input
              type="tel"
              name="number"
              onChange={this.handleOnchange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <button type="button" onClick={this.addContact}>
            Add Contact
          </button>
        </form>
      </>
    );
  }
}
