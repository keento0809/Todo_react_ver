export const loginAction = (user) => {
  return {
    type: "LOGIN",
    payload: user,
  };
};

export const logoutAction = (user) => {
  return {
    type: "LOGOUT",
    payload: user,
  };
};
