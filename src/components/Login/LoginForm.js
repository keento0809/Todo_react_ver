import React from "react";

const LoginForm = () => {
  return (
    <form>
      <label>Username</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" min="6" />
    </form>
  );
};

export default LoginForm;
