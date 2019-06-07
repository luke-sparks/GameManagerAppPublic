import React, { Component } from "react";
import "./sidebar_button.css";

class SidebarButton extends Component {
  state = {};
  render() {
    return (
      <button class="sidebar_button" style={{ color: this.props.color }}>
        {this.props.text}
      </button>
    );
  }
}

export default SidebarButton;
