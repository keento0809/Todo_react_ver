import React from "react";

const LoginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state.user,
        isLogin: true,
      };
    case "LOGOUT":
      return {
        ...state.user,
        isLogin: false,
      };
    default:
      break;
  }
};

export default LoginReducer;
