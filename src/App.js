import React from "react";

import Header from "./components/Header/Header";
// import Login from "./component/Login.Login";

import routes from "./routes.js";
import "./base_styles/App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}
