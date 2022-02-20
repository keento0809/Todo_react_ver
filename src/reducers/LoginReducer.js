import React from "react";

const LoginReducer = (state, action) => {
  switch (action.type) {
    case "USER_INPUT":
      return {
        ...state.user,
        isValid: true,
      };
    case "PASSWORD_INPUT":
      return {
        ...state.user,
        isValid: true,
      };
    case "USERNAME_BLUR":
      return {
        ...state.user,
        isValid: false,
      };
    case "PASSWORD_BLUR":
      return {
        ...state.user,
        isValid: false,
      };
    default:
      break;
  }
};

export default LoginReducer;
