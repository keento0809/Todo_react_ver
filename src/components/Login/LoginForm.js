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

const initialUsernameState = {
  value: "",
  isValid: null,
};

const initialPasswordState = {
  value: "",
  isValid: null,
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

  console.log(usernameState.isValid);

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

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
    dispatchUsername({ type: "USERNAME_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "PASSWORD_BLUR" });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formIsValid);
    if (formIsValid) {
      authCtx.LoginUser(usernameState.value, passwordState.value);
    } else if (!usernameState.isValid) {
      usernameInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

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
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
