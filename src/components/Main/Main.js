import React, { useReducer } from "react";
import TodoReducer from "../../reducers/TodoReducer";
import List from "../List/List";
import ListContext from "../../contexts/list-context";

const initialState = {
  items: [],
};

const Main = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  return (
    <ListContext.Provider value={{ state, dispatch }}>
      <div>
        <List />
      </div>
    </ListContext.Provider>
  );
};

export default Main;
