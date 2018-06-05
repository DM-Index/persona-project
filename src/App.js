import React from "react";
import { HashRouter } from "react-router-dom";

// import Login from "./component/Login.Login";

import routes from "./routes.js";
import "./base_styles/App.css";

export default class App extends React.Component {
  render() {
    return;
    <HashRouter>
      <div className="App">{routes}</div>;
    </HashRouter>;
  }
}
