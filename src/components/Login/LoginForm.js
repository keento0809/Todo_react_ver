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
// import { useEffect } from "react/cjs/react.production.min";

const initialUsernameState = {
  value: "",
  isValid: false,
};

const initialPasswordState = {
  value: "",
  isValid: false,
};

const LoginForm = (props) => {
  const authCtx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [usernameState, dispatchUsername] = useReducer(
    LoginReducer,
    initialUsernameState
  );
  const [passwordState, dispatchPassword] = useReducer(
    LoginReducer,
    initialPasswordState
  );

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const { isValid: usernameIsValid } = usernameState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking values");
      setFormIsValid(usernameIsValid && passwordIsValid);
    }, 300);
    return () => {
      clearTimeout(identifier);
    };
  }, [usernameIsValid, passwordIsValid]);

  const usernameChangeHandler = (e) => {
    dispatchUsername({
      type: "USERNAME_INPUT",
      payload: e.target.value,
    });
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({
      type: "PASSWORD_INPUT",
      payload: e.target.value,
    });
  };

  const validateUsernameHandler = () => {
    dispatchUsername({ type: "USERNAME_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "PASSWORD_BLUR" });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      authCtx.LoginUser(usernameState.value, passwordState.value);
    } else if (!emailIsValid) {
      usernameInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Username</label>
      <Input
        type="text"
        ref={usernameInputRef}
        onChange={usernameChangeHandler}
        onBlur={validateUsernameHandler}
      />
      <label>Password</label>
      <Input
        type="password"
        ref={passwordInputRef}
        onChange={passwordChangeHandler}
        onBlur={validatePasswordHandler}
      />
      <Button onClick={props.onLogin}>Login</Button>
    </form>
  );
};

export default LoginForm;
