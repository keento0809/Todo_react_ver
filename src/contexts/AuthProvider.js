import React, { useReducer } from "react";
import AuthContext from "./auth-context";
import { loginAction, logoutAction } from "../actions/login-action";
import LoginReducer from "../reducers/LoginReducer";
import ValidateReducer from "../reducers/ValidateReducer";

const initialState = {
  username: "",
  password: "",
  isLogin: false,
};

const LoginProvider = (props) => {
  const [validateState, dispatchAction] = useReducer(
    ValidateReducer,
    initialState
  );
  const [isLoggedIn, setIsLoggedIN] = useReducer(LoginReducer, false);

  const loginHandler = (user) => {
    dispatchAction(loginAction(user));
  };

  const logoutHandler = (user) => {
    dispatchAction(logoutAction(user));
  };

  const loginContext = {
    // combine useReducer to useContext
    username: validateState.username,
    password: validateState.password,
    loginUser: loginHandler,
    logoutUser: logoutHandler,
    isLogin: isLoggedIn,
  };

  return (
    <AuthContext.Provider value={loginContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default LoginProvider;
