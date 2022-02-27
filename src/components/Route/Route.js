import React, { Fragment, useState, useContext } from "react";
import AuthContext from "../../contexts/auth-context";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";

const Route = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <Header />
      <main>
        {authCtx.state.isLogIn && <Main />}
        {!authCtx.state.isLogIn && <Login onLogin={authCtx.loginUser} />}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Route;
