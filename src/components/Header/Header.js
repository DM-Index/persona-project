import React from "react";
// Router dependencies
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../../reducers/userReducer";

import Login from "../Login/Login";
// Styling
import "./Header.css";

class Header extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div className="App-Header">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/products">
          <p>Products</p>
        </Link>
        <Link to="/admin">
          <p>Admin</p>
        </Link>
        <div>
          {!this.props.isAuthed ? (
            <Login />
          ) : (
            // <Logout />
            <a href={process.env.REACT_APP_LOGOUT}>Log out</a>
          )}
        </div>
        <p> Cart Placeholder </p>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ ...user });

export default connect(
  mapStateToProps,
  { getUser }
)(Header);
