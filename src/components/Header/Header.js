import React from "react";
// Router dependencies
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// Styling
import "./Header.css";

class Header extends React.Component {
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
        <Link to="/admin">
          <p>Admin</p>
        </Link>
        <a href={process.env.REACT_APP_LOGOUT}>Logout</a>
        <p>Cart Placeholder</p>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Header);
