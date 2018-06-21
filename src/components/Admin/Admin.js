import React from "react";

import { connect } from "react-redux";
import { getUser } from "../../reducers/userReducer";

class Admin extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div>
        {!this.props.isAuthed ? (
          <p> Not authorized to see this display </p>
        ) : (
          <React.Fragment>
            <p> Welcome</p>
            <p>{JSON.stringify(this.props.user.name)}!</p>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ ...user });

export default connect(
  mapStateToProps,
  { getUser }
)(Admin);
