import React, { useState, useContext } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ListContext from "./contexts/list-context";
import ListProvider from "./contexts/ListProvider";
import Button from "./components/UI/Button";
import Task from ".//components/Task/Task";
import classes from "./App.module.css";

const App = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  const listCtx = useContext(ListContext);

  const showModalHandler = () => {
    setIsModalShown(true);
  };

  const closeModalHandler = () => {
    setIsModalShown(false);
  };

  return (
    <ListProvider>
      <Header />
      {isModalShown && <Task onClose={closeModalHandler} />}
      <div className={classes.app}>
        <Main onOpen={showModalHandler} />
        <Footer />
      </div>
    </ListProvider>
  );
};

export default App;
