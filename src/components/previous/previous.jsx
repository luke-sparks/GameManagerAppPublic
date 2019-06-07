import React, { Component } from "react";
import "./previous.css";

class Previous extends Component {
  state = {};

  render() {
    return (
      <button
        id="previous"
        style={{ justifySelf: this.props.justify, gridColumn: this.props.col }}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Previous;
