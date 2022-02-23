import React, { useState, useReducer } from "react";
import AuthContext from "./auth-context";
import LoginReducer from "../reducers/LoginReducer";
import { userLoginAct, userLogoutAct } from "../actions/login-action";

const initialState = {
  username: "dummy",
  password: "dummyPass",
};

const AuthProvider = (props) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [userInfo, dispatchAction] = useReducer(LoginReducer, initialState);

  const loginHandler = (username, password) => {
    setIsLogIn(true);
    dispatchAction(userLoginAct(username, password));
  };

  const logoutHandler = () => {
    setIsLogIn(false);
    dispatchAction(userLogoutAct());
  };

  const authContext = {
    // combine useReducer to useContext
    state: { userInfo, isLogIn },
    loginUser: loginHandler,
    logoutUser: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
