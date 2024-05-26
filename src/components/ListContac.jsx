import React, { Component } from 'react';

export default class ListContac extends Component {
  handleDelete = evt => {
    this.props.onIdDelete(evt.target.id);
  };

  render() {
    let { contacts } = this.props;

    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button type="button" onClick={this.handleDelete} id={contact.id}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
