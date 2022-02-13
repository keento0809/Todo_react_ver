import React from "react";

const initialState = {
  items: [],
  dueDate: "",
  progress: 0,
  totalTasks: 0,
};

const ListContext = React.createContext(initialState);

export default ListContext;
