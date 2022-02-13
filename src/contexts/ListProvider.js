import React from "react";
import { useReducer } from "react";
import ListContext from "./list-context";
import TodoReducer from "../reducers/TodoReducer";

const initialState = {
  items: ["Initial Task"],
};

const ListProvider = (props) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const listContext = {
    state: state,
    dispatchAction: dispatch,
  };

  return (
    <ListContext.Provider value={listContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;
