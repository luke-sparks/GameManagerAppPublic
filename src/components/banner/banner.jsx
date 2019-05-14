import React, { Component } from "react";
import "./banner.css";
import logo from "./../../images/AGWFlagLogoWhite.png";

class Banner extends Component {
  state = {};

  render() {
    return (
      <div class="rectangle">
        <img id="flag" src={logo} alt="flag logo" />
        <h1 id="gameManager">GAME MANAGER</h1>
        <div class="roundButton">TM</div>
      </div>
    ); //<img src="AGWFlagLogoWhite.png" alt="flag logo" />
  }
}

export default Banner;
