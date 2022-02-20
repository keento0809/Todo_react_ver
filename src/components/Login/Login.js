import React, { useReducer, useContext } from "react";
import Card from "../UI/Card";
import LoginForm from "./LoginForm";
import AuthContext from "../../contexts/auth-context";
import styled from "styled-components";
import LoginReducer from "../../reducers/LoginReducer";

const LoginStyle = styled.div`
  padding-top: 84px;
`;

const LoginWrapper = styled.div`
  text-align: center;

  & h2 {
    margin: 0;
    padding-bottom: 2rem;
  }
`;

const Login = (props) => {
  return (
    <LoginStyle>
      <Card>
        <LoginWrapper>
          <h2>Login Now!</h2>
          <LoginForm onLogin={props.onLogin} />
        </LoginWrapper>
      </Card>
    </LoginStyle>
  );
};

export default Login;
