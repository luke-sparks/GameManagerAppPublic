import React, { Component } from "react";
import "./nav_bar.css";
import Nav from "./../nav_bar_button/nav_bar_button";

class Nav_bar extends Component {
  state = {};

  render() {
    return (
      <div class="grid-container">
        <Nav class="nav_button" text="Welcome" color="#b83336" />
        <Nav class="nav_button" text="Teams" />
        <Nav class="nav_button" text="Start Info" />
        <Nav class="nav_button" text="Game Map" />
        <Nav class="nav_button" text="Game Guide" />
        <Nav class="nav_button" text="Game Day" />
      </div>
    );
  }
}

export default Nav_bar;
