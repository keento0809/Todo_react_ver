export const checkUsername = (username) => {
  return {
    type: "USERNAME_INPUT",
    payload: username,
  };
};

export const checkPassword = (password) => {
  return {
    type: "PASSWORD_INPUT",
    payload: password,
  };
};

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

export const userLoginAct = (username, password) => {
  return {
    type: "USER_IN",
    payload: { username, password },
  };
};

export const userLogoutAct = () => {
  return {
    type: "USER_OUT",
  };
};
