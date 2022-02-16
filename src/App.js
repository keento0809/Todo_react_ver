import React, { useState } from "react";
import Main from "./components/Main/Main";
import ListProvider from "./contexts/ListProvider";
import Button from "./components/UI/Button";
import Task from ".//components/Task/Task";
import classes from "./App.module.css";

const App = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  const showModalHandler = () => {
    setIsModalShown(true);
  };

  const closeModalHandler = () => {
    setIsModalShown(false);
  };

  return (
    <ListProvider>
      {isModalShown && <Task onClose={closeModalHandler} />}
      <div className={classes.app}>
        <Main />
        <Button onClick={showModalHandler}>Show Modal</Button>
      </div>
    </ListProvider>
  );
};

export default App;
