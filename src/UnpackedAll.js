import React, { Component } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  text-align: center;
  padding: 10px 5px;
  background: rgb(141, 46, 46);
  color: white;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

export default class UnpackedAll extends Component {
  render() {
    return (
      <Input
        onClick={this.props.unpackAll}
        type="submit"
        value="Mark All As Unpacked"
      />
    );
  }
}
