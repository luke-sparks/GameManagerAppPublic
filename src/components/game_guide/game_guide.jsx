import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./game_guide.css";
import stickFigure from "./../../images/StickMan_03.png";
import Sidebar from "../sidebar/sidebar";
import Previous from "../previous/previous";
import Continue from "../continue/continue";

class GameGuide extends Component {
  state = {};
  render() {
    return (
      <div class="grid_body">
        <Sidebar id="game_guide_bar">
        </Sidebar>
        <body class="body">
          <h1 id="GameGuide">Game guide!</h1>
          <p id="GameGuideBody">
            Text for game guide!
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
        <NavLink exact to="/Game_Map" id="previous">
          <Previous text="Previous" />
        </NavLink>
        <NavLink to="/Game_Day" id="continue">
          <Continue text="Continue" />
        </NavLink>
      </div>
    );
  }
}

export default GameGuide;
