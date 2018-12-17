import React, { Component } from "react";
import styled from "styled-components";

const InputSubmit = styled.input`
  background: rgb(141, 46, 46);
  color: white;
  font-size: 16px;
  padding: 10px 5px;
  &:focus {
    outline: none;
  }
`;

const InputText = styled.input`
  border: 2px solid rgb(141, 46, 46);
  padding: 10px 5px;
  &:focus {
    outline: none;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
`;

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
      <Form onSubmit={this.handleSubmit}>
        <InputText
          className="add__item"
          type="text"
          name="addItem"
          onChange={this.handleChange}
          value={this.state.value}
          placeholder="Add New Item"
        />
        <InputSubmit className="add__button" type="submit" value="Add Item" />
      </Form>
    );
  }
}
