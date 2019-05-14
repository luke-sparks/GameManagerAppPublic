import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./welcome_body1.css";
import stickFigure from "./../../images/StickMan_01.png";
import Continue from "./../continue/continue";

class Welcome_body1 extends Component {
  state = {};
  render() {
    return (
      <div class="grid_body">
        <body class="body">
          <h1 id="Welcome">Welcome!</h1>
          <p id="WelcomeBody">
            You can use the Game Manager to set up your game’s teams, customize
            the game puzzles and create a planner to help you get ready to play
            the game!
          </p>
          <p>
            All of the information that you create and your progress is
            automatically saved as long as you do not close the Game Manager
            window, and you will receive a summary at the end, but feel free to
            jot some notes on your way through the creation of your Adventure
            Game!
          </p>
          <p>
            Additionally, there will be a Game Host script throughout each
            section, feel free to memorize it or use it as a guide towards
            leading your Adventure Game!
          </p>
          <p>When you’re ready to get started, select “Continue” below!</p>
          <img id="StickMan1" src={stickFigure} alt="StickMan" />
        </body>
        <NavLink exact to="/" id="previous">
          <Continue text="Previous" />
        </NavLink>
        <NavLink to="/Teams" id="continue">
          <Continue text="Continue" />
        </NavLink>
      </div>
    );
  }
}

export default Welcome_body1;
