import React, { Component } from "react";
import "./nav_bar_button.css";

class Nav_bar_button extends Component {
  state = {};
  render() {
    return (
      <button class="nav_bar_button" style={{ color: this.props.color }}>
        {this.props.text}
      </button>
    );
  }
}

export default Nav_bar_button;
