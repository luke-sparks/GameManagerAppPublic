import React from "react";
import ReactDOM from "react-dom";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./index.css";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Nav_bar from "./components/nav_bar/nav_bar";
import Continue from "./components/continue/continue";
import Banner from "./components/banner/banner";
import Welcome1 from "./components/welcome_body1/welcome_body1";

//ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <div>
    <HashRouter>
      <Banner />
      <Nav_bar />
      <div class="content">
        <Route exact path="/" component={Welcome1} />
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
    <Nav_bar />
    <div class="footer">
      <Welcome1 />
      <Continue text="Previous" justify="start" col="2" />
      <Continue text="Continue" justify="end" col="3" />
    </div>*/
