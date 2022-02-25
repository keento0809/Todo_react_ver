import React, { useState, useContext } from "react";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ListContext from "./contexts/list-context";
import AuthContext from "./contexts/auth-context";
import ListProvider from "./contexts/ListProvider";
import Styled from "styled-components";
import classes from "./App.module.css";
import NavModal from "./components/NavModal/NavModal";
import Task from "./components/Task/Task";

const AppStyle = Styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const listCtx = useContext(ListContext);
  const authCtx = useContext(AuthContext);

  console.log(authCtx.state.isLogIn);

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
    <ListProvider>
      <AppStyle className={classes.app}>
        <Header onOpen={showModalHandler} />
        {/* {isModalShown && (
          <NavModal onClose={closeModalHandler} onLogout={logoutHandler} />
        )} */}
        {isModalShown && (
          <Task onClose={closeModalHandler} onLogout={logoutHandler} />
        )}
        <main>
          {/* {isLoggedIn && <Main onOpen={showModalHandler} />}
          {!isLoggedIn && <Login onLogin={loginHandler} />} */}
          {authCtx.state.isLogIn && <Main onOpen={showModalHandler} />}
          {!authCtx.state.isLogIn && <Login onLogin={authCtx.loginUser} />}
        </main>
        <Footer />
      </AppStyle>
    </ListProvider>
  );
};

export default App;
