import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  color: #bc2222;
  font-size: 12px;
`;

const List = styled.li`
  list-style: none;
`;

export default class Item extends Component {
  render() {
    const { value, packed, id } = this.props.itemInfo;
    return (
      <List>
        <input
          type="checkbox"
          checked={packed}
          onChange={() => this.props.handleCheck(id)}
        />
        <span>{value}</span>
        <Button>Delete</Button>
      </List>
    );
  }
}
