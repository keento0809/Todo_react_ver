import React from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

const LoginForm = () => {
  return (
    <form>
      <label>Username</label>
      <Input type="text" />
      <label>Password</label>
      <Input type="password" />
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
