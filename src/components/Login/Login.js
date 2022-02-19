import React, { Fragment } from "react";
import LoginForm from "./LoginForm";

const Login = (props) => {
  return (
    <Fragment>
      <div>
        <h2>Please login here.</h2>
        <LoginForm />
      </div>
    </Fragment>
  );
};

export default Login;
