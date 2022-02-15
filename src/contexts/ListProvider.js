import React from "react";
import { useReducer } from "react";
import ListContext from "./list-context";
import TodoReducer from "../reducers/TodoReducer";

const initialState = {
  items: ["Initial Task"],
};

const ListProvider = (props) => {
  const [listState, dispatchAction] = useReducer(TodoReducer, initialState);

  const addTaskHandler = (item) => {
    dispatchAction(addTask(item));
  };

  const removeTaskHandler = (id) => {
    dispatchAction(removeTask(id));
  };

  const listContext = {
    state: listState,
    addTask: addTaskHandler,
    removeTask: removeTaskHandler,
  };

  return (
    <ListContext.Provider value={listContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;
