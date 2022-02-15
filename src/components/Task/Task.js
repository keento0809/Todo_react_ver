import React, { useContext } from "react";
import ListContext from "../../contexts/list-context";

const Task = (props) => {
  const listCtx = useContext(ListContext);

  const allTasks = listCtx.items.map((item) => <p>{item}</p>);

  return <div>aaa</div>;
};
