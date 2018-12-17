import React, { Component } from "react";

export default class NewItem extends Component {
  state = {
    value: ""
  };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.add({
      value: this.state.value,
      id: Date.now(),
      packed: false
    });
    this.setState({ value: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="add__item"
          type="text"
          name="addItem"
          onChange={this.handleChange}
          value={this.state.value}
          placeholder="Add New Item"
        />
        <input className="add__button" type="submit" value="Add Item" />
      </form>
    );
  }
}
