import React, { Component } from "react";
import "./continue.css";

class Continue extends Component {
  state = {};

  render() {
    return (
      <button
        id="continue"
        style={{ justifySelf: this.props.justify, gridColumn: this.props.col }}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Continue;
