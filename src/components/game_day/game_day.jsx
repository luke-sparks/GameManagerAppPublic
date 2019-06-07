import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./game_day.css";
import stickFigure from "./../../images/StickMan_03.png";
import Sidebar from "../sidebar/sidebar";
import Previous from "../previous/previous";
import Continue from "../continue/continue";

class GameDay extends Component {
  state = {};
  render() {
    return (
      <div class="grid_body">
        <Sidebar id="game_day_bar">
        </Sidebar>
        <body class="body">
          <h1 id="GameDay">Game day!</h1>
          <p id="GameDayBody">
            Text for game day!
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
        <NavLink exact to="/Game_Guide" id="previous">
          <Previous text="Previous" />
        </NavLink>
        <NavLink to="/Game_Day" id="continue">
          <Continue text="Where does this go??... print button?" />
        </NavLink>
      </div>
    );
  }
}

export default GameDay;
