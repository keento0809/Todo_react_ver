import React, { useState } from "react";
import Main from "./components/Main/Main";
import ListProvider from "./contexts/ListProvider";
import Task from ".//components/Task/Task";
import classes from "./App.module.css";

const App = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <ListProvider>
      {isModalShown && <Task />}
      <div className={classes.app}>
        <Main />
      </div>
    </ListProvider>
  );
};

export default App;
