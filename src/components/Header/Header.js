import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="App-Header">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/login">
          <p>Login</p>
        </Link>
        <Link to="/products">
          <p>Products</p>
        </Link>
        <a href={process.env.REACT_APP_LOGOUT}>Logout</a>
      </div>
    );
  }
}

export default Header;
