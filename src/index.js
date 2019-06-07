import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter } from "react-router-dom";
//import { Route, NavLink, HashRouter } from "react-router-dom";
import "./index.css";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";
import NavBar from "./components/nav_bar/nav_bar";
//import Continue from "./components/continue/continue";
import Banner from "./components/banner/banner";
import Welcome1 from "./components/welcome_body1/welcome_body1";
import Teams from "./components/teams/teams";
import StartInfo from "./components/start_info/start_info";
import GameMap from "./components/game_map/game_map";
import GameGuide from "./components/game_guide/game_guide";
import GameDay from "./components/game_day/game_day";


//ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <div>
    <HashRouter>
      <Banner />
      <NavBar />
      <div class="content">
        <Route exact path="/" component={Welcome1} />
      </div>
      <div class="content">
        <Route exact path="/Teams" component={Teams} />
      </div>
      <div class="content">
        <Route exact path="/Start_Info" component={StartInfo} />
      </div>
      <div class="content">
        <Route exact path="/Game_Map" component={GameMap} />
      </div>
      <div class="content">
        <Route exact path="/Game_Guide" component={GameGuide} />
      </div>
      <div class="content">
        <Route exact path="/Game_Day" component={GameDay} />
      </div>
    </HashRouter>
  </div>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
/*<Banner />
    <NavBar />
    <div class="footer">
      <Welcome1 />
      <Previous text="Previous" justify="start" col="2" />
      <Continue text="Continue" justify="end" col="3" />
    </div>*/
