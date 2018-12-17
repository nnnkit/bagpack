import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const { value, packed, id } = this.props.itemInfo;
    return (
      <li>
        <input
          type="checkbox"
          checked={packed}
          onChange={() => this.props.handleCheck(id)}
        />
        <span>{value}</span>
        <button className="delete__item">Delete</button>
      </li>
    );
  }
}
