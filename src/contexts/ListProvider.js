import React from "react";
import { useReducer } from "react";
import {
  addTask,
  fetchTasks,
  updateTask,
  removeTask,
} from "../actions/list-action";
import ListContext from "./list-context";
import TodoReducer from "../reducers/TodoReducer";

const initialState = {
  items: [],
  totalTask: 0,
};

const ListProvider = (props) => {
  const [listState, dispatchAction] = useReducer(TodoReducer, initialState);

  const addTaskHandler = (item) => {
    dispatchAction(addTask(item));
  };

  const fetchItemsHandler = (array) => {
    dispatchAction(fetchTasks(array));
  };

  const updateTaskHandler = (task) => {
    dispatchAction(updateTask(task));
  };

  const removeTaskHandler = (id) => {
    dispatchAction(removeTask(id));
  };

  const listContext = {
    items: listState.items,
    fetchItems: fetchItemsHandler,
    totalTask: listState.totalTask,
    addToList: addTaskHandler,
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
