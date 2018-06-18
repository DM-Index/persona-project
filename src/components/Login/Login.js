import React from "react";
import "./Login.css";

const Login = () => (
  <div>
    <a href={process.env.REACT_APP_LOGIN}>
      <button>Login</button>
    </a>
  </div>
);

export default Login;
