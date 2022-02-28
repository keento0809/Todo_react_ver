import React, {
  useState,
  useRef,
  useReducer,
  useContext,
  useEffect,
} from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import AuthContext from "../../contexts/auth-context";
import LoginReducer from "../../reducers/LoginReducer";
import { checkPassword, checkUsername } from "../../actions/login-action";
import styled from "styled-components";

const initialUsernameState = {
  value: "",
  isValid: null,
};

const initialPasswordState = {
  value: "",
  isValid: null,
};

const ErrorMessage = styled.p`
  color: red;
`;

const LoginForm = (props) => {
  const authCtx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [usernameState, dispatchUsername] = useReducer(
    LoginReducer,
    initialUsernameState
  );
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [passwordState, dispatchPassword] = useReducer(
    LoginReducer,
    initialPasswordState
  );
  const [passwordTouched, setPasswordTouched] = useState(false);

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  console.log(formIsValid);

  // Check the validation of username and password
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(usernameState.isValid && passwordState.isValid);
    }, 300);
    return () => {
      clearTimeout(identifier);
    };
  }, [usernameState.isValid, passwordState.isValid]);

  const usernameChangeHandler = (e) => {
    dispatchUsername(checkUsername(e.target.value));
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword(checkPassword(e.target.value));
  };

  const validateUsernameHandler = () => {
    setUsernameTouched(true);
    dispatchUsername({ type: "USERNAME_BLUR" });
  };

  const validatePasswordHandler = () => {
    setPasswordTouched(true);
    dispatchPassword({ type: "PASSWORD_BLUR" });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      authCtx.loginUser(usernameState.value, passwordState.value);
    } else if (!usernameState.isValid) {
      usernameInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  const userNameIsInvalid = !usernameState.isValid && usernameTouched;
  const passwordIsInvalid = !passwordState.isValid && passwordTouched;

  let isDisabled = true;

  if (formIsValid) isDisabled = false;

  return (
    <form onSubmit={submitHandler}>
      <Input
        type="text"
        id="username"
        label="Username"
        ref={usernameInputRef}
        isValid={usernameState.isValid}
        onChange={usernameChangeHandler}
        onBlur={validateUsernameHandler}
      />
      <Input
        type="password"
        id="password"
        label="Password"
        ref={passwordInputRef}
        isValid={passwordState.isValid}
        onChange={passwordChangeHandler}
        onBlur={validatePasswordHandler}
      />
      {/* <Button onClick={props.onLogin}>Login</Button> */}
      <Button onClick={submitHandler} isDisabled={isDisabled}>
        Login
      </Button>
      {userNameIsInvalid && (
        <ErrorMessage>Username must be at least 5 letters.</ErrorMessage>
      )}
      {passwordIsInvalid && (
        <ErrorMessage>Password must be at least 6 letters.</ErrorMessage>
      )}
    </form>
  );
};

export default LoginForm;
