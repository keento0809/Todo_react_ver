import React, { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
  const [isLogIn, setIsLogIn] = useState(false);

  const loginHandler = () => {
    setIsLogIn(true);
  };

  const logoutHandler = () => {
    setIsLogIn(false);
  };

  const authContext = {
    // combine useReducer to useContext
    loginUser: loginHandler,
    logoutUser: logoutHandler,
    isLogin: isLogIn,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
