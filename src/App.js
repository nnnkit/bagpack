import React, { Component } from "react";
import NewItem from "./NewItem";
import Items from "./Items";
import UnpackedAll from "./UnpackedAll";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 20px;
  max-width: 500px;
  margin: auto;
`;

const defaultState = [
  { value: "Pants", id: 1545039748385, packed: false },
  { value: "Jacket", id: 1545039748386, packed: false },
  { value: "iPhone Charger", id: 1545039748387, packed: false },
  { value: "MacBook", id: 1545039748388, packed: false },
  { value: "Sleeping Pills", id: 1545039748389, packed: true },
  { value: "Underwear", id: 1545039748390, packed: false },
  { value: "Hat", id: 1545039748391, packed: false },
  { value: "T-Shirts", id: 1545039748392, packed: false },
  { value: "Belt", id: 1545039748393, packed: false },
  { value: "Passport", id: 1545039748394, packed: true },
  { value: "Sandwich", id: 1545039748395, packed: true }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: defaultState
    };
  }

  addItem = item => {
    if (!item.value) return;
    this.setState({ items: [item, ...this.state.items] });
  };
  unpackAll = () => {
    const unpacked = this.state.items.map(item => {
      item.packed = false;
      return item;
    });
    this.setState({ items: unpacked });
  };

  handleCheck = id => {
    const items = this.state.items.map(item => {
      if (item.id === id) {
        item.packed = !item.packed;
      }
      return item;
    });
    this.setState({ items });
  };
  render() {
    const unpacked = this.state.items.filter(item => !item.packed);
    const packed = this.state.items.filter(item => item.packed);
    return (
      <Wrapper>
        <NewItem add={this.addItem} />
        <Items
          title="Unpacked Item"
          items={unpacked}
          handleCheck={this.handleCheck}
        />
        <Items
          title="Packed Item"
          items={packed}
          handleCheck={this.handleCheck}
        />
        <UnpackedAll unpackAll={this.unpackAll} />
      </Wrapper>
    );
  }
}

export default App;
