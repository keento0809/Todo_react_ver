import React, { Fragment, useState, useContext } from "react";
import AuthContext from "../../contexts/auth-context";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Task from "../Task/Task";

const Route = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authCtx = useContext(AuthContext);

  const showModalHandler = () => {
    setIsModalShown(true);
  };

  const closeModalHandler = () => {
    setIsModalShown(false);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <Fragment>
      {isModalShown && (
        <Task onClose={closeModalHandler} onLogout={logoutHandler} />
      )}
      <Header onOpen={showModalHandler} />
      <main>
        {authCtx.state.isLogIn && <Main onOpen={showModalHandler} />}
        {!authCtx.state.isLogIn && <Login onLogin={authCtx.loginUser} />}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Route;
