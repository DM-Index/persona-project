import React from "react";
// Router dependencies
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../../reducers/userReducer";

// Styling
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="App-Header">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/products">
          <p>Products</p>
        </Link>
        <div>
          {!this.props.isAuthed ? (
            <a href={process.env.REACT_APP_LOGIN}>Log In</a>
          ) : (
            <a href={process.env.REACT_APP_LOGOUT}>Log out</a>
          )}
        </div>
        <Link to="/cart">
          <p>Cart</p>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ ...user });

export default connect(
  mapStateToProps,
  { getUser }
)(Header);
