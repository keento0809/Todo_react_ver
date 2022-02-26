import React, { useContext } from "react";
import TaskModal from "../UI/TaskModal";
import ListContext from "../../contexts/list-context";
import Button from "../UI/Button";
import styled from "styled-components";

const Task = (props) => {
  const listCtx = useContext(ListContext);

  const TaskStyle = styled.div`
    text-align: center;
  `;

  const editTaskHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <TaskModal onClose={props.onClose}>
      {/* <TaskModal> */}
      <TaskStyle>
        <h2>Edit your task</h2>
        <input value={props.onTask} onChange={editTaskHandler} />
        {/* <Button onClick={props.onClose}>Close</Button> */}
        <Button onClick={props.onClose}>Close</Button>
      </TaskStyle>
    </TaskModal>
  );
};

export default Task;
