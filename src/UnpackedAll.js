import React, { Component } from "react";

export default class UnpackedAll extends Component {
  render() {
    return (
      <input
        className="unpacked__all"
        onClick={this.props.unpackAll}
        type="submit"
        value="Mark All As Unpacked"
      />
    );
  }
}
