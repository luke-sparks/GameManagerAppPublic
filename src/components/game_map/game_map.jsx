import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./game_map.css";
import stickFigure from "./../../images/StickMan_03.png";
import Sidebar from "../sidebar/sidebar";
import Previous from "../previous/previous";
import Continue from "../continue/continue";

class GameMap extends Component {
  state = {};
  render() {
    return (
      <div class="grid_body">
        <Sidebar id="game_map_bar">
        </Sidebar>
        <body class="body">
          <h1 id="GameMap">Game map!</h1>
          <p id="GameMapBody">
            Text for game map!
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
        <NavLink exact to="/Start_Info" id="previous">
          <Previous text="Previous" />
        </NavLink>
        <NavLink to="/Game_Guide" id="continue">
          <Continue text="Continue" />
        </NavLink>
      </div>
    );
  }
}

export default GameMap;
