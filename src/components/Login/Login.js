import React, { Fragment } from "react";
// lets keep login simple and make it a function
// fragment this later
const Login = () => (
  <Fragment>
    <a href={process.env.REACT_APP_LOGIN}>
      <button>Login</button>
    </a>
  </Fragment>
);

export default Login;
