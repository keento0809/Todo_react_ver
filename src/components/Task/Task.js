import React, { useContext } from "react";
import Modal from "../UI/Modal";
import ListContext from "../../contexts/list-context";
import Button from "../UI/Button";
import styled from "styled-components";

const Task = (props) => {
  const listCtx = useContext(ListContext);

  const TaskStyle = styled.div`
    text-align: center;
  `;

  //   const allTasks = listCtx.items.map((item) => <p>{item}</p>);
  //   const selectedItemIndex = state.items.findIndex((item) => item.id === )

  return (
    <Modal onClose={props.onClose}>
      <TaskStyle>
        <h2>Dummy Task</h2>
        <h3>50%</h3>
        <Button>Done</Button>
        <Button onClick={props.onClose}>Close</Button>
      </TaskStyle>
    </Modal>
  );
};

export default Task;
