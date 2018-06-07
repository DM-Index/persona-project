import React from "react";
import ReactDOM from "react-dom";
// Wrappers
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
// Import Brain
import App from "./App";
import store from "./store";
// Styling
import "./base_styles/index.css";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
