import React, { useReducer } from "react";
import LoginContext from "./login-context";
import { loginAction, logoutAction } from "../actions/login-action";

const initialState = {
  username: "",
  password: "",
  isLogin: false,
};

const LoginProvider = (props) => {
  const [loginState, dispatchAction] = useReducer(LoginReducer, initialState);

  const loginContext = {
    username: loginState.username,
    password: loginState.password,
    isLogin: false,
  };

  const loginHandler = () => {
    dispatchAction(loginAction(user));
  };

  const logoutHandler = () => {
    dispatchAction(logoutAction(user));
  };

  return (
    <LoginContext.Provider value={loginContext}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
