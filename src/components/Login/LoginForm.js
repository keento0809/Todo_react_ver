import React, { useRef } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

const LoginForm = (props) => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  return (
    <form>
      <label>Username</label>
      <Input type="text" ref={usernameInputRef} />
      <label>Password</label>
      <Input type="password" ref={passwordInputRef} />
      <Button onClick={props.onLogin}>Login</Button>
    </form>
  );
};

export default LoginForm;
