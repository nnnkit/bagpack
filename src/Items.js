import React, { Component, Fragment } from "react";
import Item from "./Item";

export default class Items extends Component {
  render() {
    const { title, items, handleCheck } = this.props;
    return (
      <Fragment>
        <h3>
          {title} ({items.length})
        </h3>
        <ul>
          {items.map(item => (
            <Item key={item.id} handleCheck={handleCheck} itemInfo={item} />
          ))}
        </ul>
      </Fragment>
    );
  }
}
