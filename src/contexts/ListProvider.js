import React from "react";
import { useReducer } from "react";
import {
  addTask,
  editTask,
  updateTask,
  removeTask,
} from "../actions/list-action";
import ListContext from "./list-context";
import TodoReducer from "../reducers/TodoReducer";

const initialState = {
  items: [],
  totalTask: 0,
  // items: [{ key: "t1", id: "t1", textValue: "Initial Task" }],
};

const ListProvider = (props) => {
  const [listState, dispatchAction] = useReducer(TodoReducer, initialState);

  const addTaskHandler = (item) => {
    dispatchAction(addTask(item));
  };

  const editTaskHandler = (item) => {
    dispatchAction(editTask(item));
  };

  const updateTaskHandler = (task) => {
    console.log(task);
    dispatchAction(updateTask(task));
  };

  const removeTaskHandler = (id) => {
    dispatchAction(removeTask(id));
  };

  const listContext = {
    items: listState.items,
    totalTask: listState.totalTask,
    addToList: addTaskHandler,
    editToTask: editTaskHandler,
    updateOfTask: updateTaskHandler,
    removeFromList: removeTaskHandler,
  };

  return (
    <ListContext.Provider value={listContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;
