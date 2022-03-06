import React, { useState, useReducer, useContext } from "react";
import AuthContext from "./auth-context";
import ListContext from "./list-context";
import LoginReducer from "../reducers/LoginReducer";
import { userLoginAct, userLogoutAct } from "../actions/login-action";
import List from "../components/List/List";

const initialState = {
  username: "dummy",
  password: "dummyPass",
};

const AuthProvider = (props) => {
  const listCtx = useContext(ListContext);
  const [isLogIn, setIsLogIn] = useState(false);
  const [userInfo, dispatchAction] = useReducer(LoginReducer, initialState);

  const loginHandler = (username, password) => {
    setIsLogIn(true);
    // Default code
    // listCtx.items.dispatchAction(userLoginAct(username, password));

    dispatchAction(userLoginAct(username, password));
  };

  const logoutHandler = () => {
    setIsLogIn(false);
    // probably temporary code
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
