import React, { Component } from 'react';

export default class FilterContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = evt => {
    this.props.onQueryChange(evt.target.value);
  };

  render() {
    return (
      <>
        <p>Find contacts by name</p>
        <input type="text" name="name_filter" onChange={this.handleChange} />
      </>
    );
  }
}
