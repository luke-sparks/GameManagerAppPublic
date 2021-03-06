import React, { Component } from "react";
import "./nav_bar.css";
import Nav from "./../nav_bar_button/nav_bar_button";
import { NavLink } from "react-router-dom";
//import { Route, NavLink, HashRouter } from "react-router-dom";
//import { Link } from "react-router-dom";

class Nav_bar extends Component {
  state = {};

  render() {
    return (
      <div class="grid-container">
        <NavLink exact to="/" id="nav_button">
          <Nav text="Welcome" />
        </NavLink>
        <NavLink to="/Teams" id="nav_button">
          <Nav text="Teams" />
        </NavLink>
        <NavLink to="/Start_Info" id="nav_button">
          <Nav text="Start Info" />
        </NavLink>
        <NavLink to="/Game_Map" id="nav_button">
          <Nav text="Game Map" />
        </NavLink>
        <NavLink to="/Game_Guide" id="nav_button">
          <Nav text="Game Guide" />
        </NavLink>
        <NavLink to="/Game_Day" id="nav_button">
          <Nav text="Game Day" />
        </NavLink>
      </div>
      /*<div class="grid-container">
        <Nav class="nav_button" text="Welcome" color="#b83336" />
        <Nav class="nav_button" text="Teams" />
        <Nav class="nav_button" text="Start Info" />
        <Nav class="nav_button" text="Game Map" />
        <Nav class="nav_button" text="Game Guide" />
        <Nav class="nav_button" text="Game Day" />
      </div>*/
    );
  }
}

export default Nav_bar;
