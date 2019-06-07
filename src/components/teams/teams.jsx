import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./teams.css";
import stickFigure from "./../../images/StickMan_03.png";
import Sidebar from "./../sidebar/sidebar";
import Previous from "./../previous/previous";
import Continue from "./../continue/continue";

class Teams extends Component {
  state = {};
  render() {
    return (
      <div class="grid_body">
        <Sidebar id="teams_bar">
        </Sidebar>
        <body class="body">
          <h1 id="Teams">Teams!</h1>
          <p id="TeamsBody">
            Text for teams!
          </p>
          <p>
            That sidebar over there will allow us to navigate to the different teams (or never use it but put it in Game Guide)
          </p>
          <p>
            Paragraph 3
          </p>
          <p>When you’re ready to get started, select “Continue” below!</p>
          <img id="StickMan1" src={stickFigure} alt="StickMan" />
        </body>
        <NavLink exact to="/" id="previous">
          <Previous text="Previous" />
        </NavLink>
        <NavLink to="/Start_Info" id="continue">
          <Continue text="Continue" />
        </NavLink>
      </div>
    );
  }
}

export default Teams;
