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

  return (
    <TaskModal onClose={props.onClose}>
      <TaskStyle>
        <h2>This is a test.</h2>
        <Button onClick={props.onClose}>Close</Button>
      </TaskStyle>
    </TaskModal>
  );
};

export default Task;
