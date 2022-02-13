import React, { useState, useContext, useReducer } from "react";
import ListContext from "./store/list-context";
import List from './components/List/List';

function App() {
  const listCtx = useContext(ListContext);
  const [test, setTest] = useState("aaaa");

  return (
    <ListContext.Provider value={test}>
      <h1>TODO REACT VER</h1>
      <main><List /></main>
    </ListContext.Provider>
  );
}

export default App;
