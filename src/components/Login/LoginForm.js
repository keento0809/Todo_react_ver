import React from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

const LoginForm = (props) => {
  return (
    <form>
      <label>Username</label>
      <Input type="text" />
      <label>Password</label>
      <Input type="password" />
      <Button onClick={props.onLogin}>Login</Button>
    </form>
  );
};

export default LoginForm;
