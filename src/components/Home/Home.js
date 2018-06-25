import React from "react";

import { connect } from "react-redux";
import { getUser } from "../../reducers/userReducer";
// Styling
import "./Home.css";

class Home extends React.Component {
  componentDidMount() {
    // console.log(getUser);
    this.props.getUser();
  }
  render() {
    return (
      <div>
        {!this.props.isAuthed ? (
          <p>Not Logged In</p>
        ) : (
          <p>{JSON.stringify(this.props.user)}</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ ...user });

export default connect(
  mapStateToProps,
  { getUser }
)(Home);
