import React from "react";
import { useReducer } from "react";
import { addTask, editTask, removeTask } from "../actions/list-action";
import ListContext from "./list-context";
import TodoReducer from "../reducers/TodoReducer";

const initialState = {
  items: [],
  // items: [{ key: "t1", id: "t1", textValue: "Initial Task" }],
};

const ListProvider = (props) => {
  const [listState, dispatchAction] = useReducer(TodoReducer, initialState);

  const addTaskHandler = (item) => {
    console.log("Item is being added.");
    dispatchAction(addTask(item));
  };

  const editTaskHandler = (item) => {
    dispatchAction(editTask(item));
  };

  const removeTaskHandler = (id) => {
    dispatchAction(removeTask(id));
  };

  const listContext = {
    // state: listState,
    items: listState.items,
    addToList: addTaskHandler,
    editToTask: editTaskHandler,
    removeFromList: removeTaskHandler,
  };

  return (
    <ListContext.Provider value={listContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;
