import React, { Component } from "react";
import "./sidebar.css";
import SidebarButton from "./../sidebar_button/sidebar_button";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  state = {};  

  createSidebar = (path, nav_link_array, text_array) => {
    let sidebar = [];

    if (typeof path !== 'undefined' &&
      typeof nav_link_array !== 'undefined' &&
      typeof text_array !== 'undefined') {
      
      if (nav_link_array.length === text_array.length) {

      if (nav_link_array.length <= 0) {
        return sidebar;
      }

      // loops over length of 
      for (let index = 0; index < nav_link_array.length; index++) {
          sidebar.push(
            <NavLink exact to={`/${path}/ ${nav_link_array[index]}`} id="sidebar_button">
              <SidebarButton text={text_array[index]} />
            </NavLink>
          );
      }
      sidebar.push();
      } else {
        sidebar.push("array lengths don't match");
      }
    }
    return sidebar;
  }

  render() {
    return (
      <div class="grid">
        {this.createSidebar(
              this.props.path,
              this.props.nav_link_array,
              this.props.text_array)}
      </div>
    );
  }
}

export default Sidebar;
