import React from "react";

const LoginReducer = (state, action) => {
  switch (action.type) {
    case "USERNAME_INPUT":
      return {
        value: action.payload,
        isValid: action.payload.trim().length > 4,
      };
    case "PASSWORD_INPUT":
      return {
        value: action.payload,
        isValid: action.payload.trim().length > 6,
      };
    case "USERNAME_BLUR":
      return {
        value: state.value,
        isValid: state.value.trim().length > 4,
      };
    case "PASSWORD_BLUR":
      return {
        value: state.value,
        isValid: state.value.trim().length > 6,
      };
    default:
      break;
  }
};

export default LoginReducer;
