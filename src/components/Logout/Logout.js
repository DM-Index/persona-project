import React from "react";

const Logout = () => (
  <div>
    <a href={process.env.REACT_APP_LOGOUT}>
      <button>Logout</button>
    </a>
  </div>
);

export default Logout;
