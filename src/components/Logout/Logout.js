import React from "react";

const Logout = () => (
  <a href={process.env.REACT_APP_LOGOUT}>
    <button>Logout</button>
  </a>
);

export default Logout;
