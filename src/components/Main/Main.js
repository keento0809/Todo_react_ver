import React, { useReducer } from "react";
import ListContext from "../../contexts/list-context";
import TodoReducer from "../../reducers/TodoReducer";
import List from "../List/List";

const initialState = {
  items: [],
};

const Main = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  // const listContext = {
  //   state: state,
  //   addingItem: dispatch,
  // };

  return (
    <ListContext.Provider value={{ state, dispatch }}>
      <List />
    </ListContext.Provider>
  );
};

export default Main;
