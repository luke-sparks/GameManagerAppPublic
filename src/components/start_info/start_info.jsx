import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./start_info.css";
import stickFigure from "./../../images/StickMan_03.png";
import Sidebar from "../sidebar/sidebar";
import Previous from "../previous/previous";
import Continue from "../continue/continue";

class StartInfo extends Component {
  state = {};
  render() {
    return (
      <div class="grid_body">
        <Sidebar id="start_info_bar">
        </Sidebar>
        <body class="body">
          <h1 id="StartInfo">Start info!</h1>
          <p id="StartInfoBody">
            Text for start info!
          </p>
          <p>
            Paragraph 2
          </p>
          <p>
            Paragraph 3
          </p>
          <p>When you’re ready to get started, select “Continue” below!</p>
          <img id="StickMan1" src={stickFigure} alt="StickMan" />
        </body>
        <NavLink exact to="/Teams" id="previous">
          <Previous text="Previous" />
        </NavLink>
        <NavLink to="/Game_Map" id="continue">
          <Continue text="Continue" />
        </NavLink>
      </div>
    );
  }
}

export default StartInfo;
