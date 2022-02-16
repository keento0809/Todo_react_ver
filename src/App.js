import React, { useState } from "react";
import Main from "./components/Main/Main";
import ListProvider from "./contexts/ListProvider";
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
        <button onClick={showModalHandler}>Show Modal</button>
      </div>
    </ListProvider>
  );
};

export default App;
