import React, { useContext } from "react";
import Modal from "../UI/Modal";
import ListContext from "../../contexts/list-context";

const Task = (props) => {
  const listCtx = useContext(ListContext);

  //   const allTasks = listCtx.items.map((item) => <p>{item}</p>);
  //   const selectedItemIndex = state.items.findIndex((item) => item.id === )

  return (
    <Modal onClose={props.onClose}>
      <div></div>
    </Modal>
  );
};

export default Task;
