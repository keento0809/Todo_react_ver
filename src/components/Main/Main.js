import React from "react";
import List from "../List/List";
import ListProvider from "../../contexts/ListProvider";

const Main = () => {
  return (
    <ListProvider>
      <List />
    </ListProvider>
  );
};

export default Main;
