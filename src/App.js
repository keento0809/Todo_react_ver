import React, { useState, useContext } from "react";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ListContext from "./contexts/list-context";
import ListProvider from "./contexts/ListProvider";
import Button from "./components/UI/Button";
import Task from ".//components/Task/Task";
import Styled from "styled-components";
import classes from "./App.module.css";

const AppStyle = Styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const listCtx = useContext(ListContext);

  const showModalHandler = () => {
    setIsModalShown(true);
  };

  const closeModalHandler = () => {
    setIsModalShown(false);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  return (
    <ListProvider>
      <AppStyle className={classes.app}>
        <Header onOpen={showModalHandler} />
        {isModalShown && <Task onClose={closeModalHandler} />}
        <main>
          {isLoggedIn && <Main onOpen={showModalHandler} />}
          {!isLoggedIn && <Login onLogin={loginHandler} />}
        </main>
        <Footer />
      </AppStyle>
    </ListProvider>
  );
};

export default App;
