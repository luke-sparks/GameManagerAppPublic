import React, { Component } from "react";
import "./sidebar.css";
//import Nav from "./../sidebar_button/sidebar_button";
import SidebarButton from "./../sidebar_button/sidebar_button";
import { NavLink } from "react-router-dom";
//import { Route, NavLink, HashRouter } from "react-router-dom";
//import { Link } from "react-router-dom";

class Sidebar extends Component {
  state = {};

  render() {
    return (
      <div class="grid">
        <NavLink exact to="/Teams/Team1" id="sidebar_button">
          <SidebarButton text="Team 1" />
        </NavLink>
        <NavLink exact to="/Teams/Team2" id="sidebar_button">
          <SidebarButton text="Team 2" />
        </NavLink>
      </div>
    );
  }
}

export default Sidebar;
