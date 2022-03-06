import React from "react";
import { useReducer } from "react";
import {
  addTask,
  fetchTasks,
  updateTask,
  removeTask,
  resetListAction,
} from "../actions/list-action";
import ListContext from "./list-context";
import TodoReducer from "../reducers/TodoReducer";

const initialState = {
  // Default code. DO NOT CHANGE !!!
  items: [],
  totalTask: 0,

  // test
  // items: ["test task1"],
  // totalTask: 1,
};

const ListProvider = (props) => {
  const [listState, dispatchAction] = useReducer(TodoReducer, initialState);

  const addTaskHandler = (item) => {
    dispatchAction(addTask(item));
  };

  const fetchTasksHandler = (array) => {
    dispatchAction(fetchTasks(array));
  };

  const updateTaskHandler = (task) => {
    dispatchAction(updateTask(task));
  };

  const removeTaskHandler = (id) => {
    dispatchAction(removeTask(id));
  };

  const resetListHandler = () => {
    dispatchAction(resetListAction());
  };

  const listContext = {
    items: listState.items,
    totalTask: listState.totalTask,
    fetchTasks: fetchTasksHandler,
    addToList: addTaskHandler,
    updateOfTask: updateTaskHandler,
    removeFromList: removeTaskHandler,
    resetList: resetListHandler,
  };

  return (
    <ListContext.Provider value={listContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;
