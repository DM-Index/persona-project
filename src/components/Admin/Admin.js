import React from "react";

import { connect } from "react-redux";

class Admin extends React.component {
  render() {
    return <div>Admin</div>;
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Admin);
