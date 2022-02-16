import React from "react";
import { useReducer } from "react";
import { addTask, removeTask } from "../actions/list-action";
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
    console.log("dispatching!!");
    dispatchAction(removeTask(id));
  };

  const listContext = {
    state: listState,
    addToList: addTaskHandler,
    removeFromList: removeTaskHandler,
  };

  return (
    <ListContext.Provider value={listContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;
