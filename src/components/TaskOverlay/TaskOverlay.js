import React, { useContext } from "react";
import TaskModal from "../UI/TaskModal";
import ListContext from "../../contexts/list-context";
import Button from "../UI/Button";
import styled from "styled-components";

const TaskStyles = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;

  & h2 {
    margin: 0;
    padding-bottom: 0.8rem;
  }

  & input {
    border: 2px solid #07ffab;
    border-radius: 4px;
    min-width: 200px;
    padding: 0.2rem 0.4rem;
    /* padding-bottom: .5rem; */
  }
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 2rem;
`;

const TaskOverlay = (props) => {
  const listCtx = useContext(ListContext);

  const startEditTaskHandler = (e) => {
    props.onSetSelectedTaskText(e.target.value);
    // console.log(props.selectedTaskText);
  };

  const updateTaskHandler = (e) => {
    const updatedTask = {
      id: props.selectedTaskId,
      text: props.selectedTaskText,
    };
    console.log(updatedTask);
    listCtx.updateOfTask(updatedTask);
    props.onClose();
  };

  return (
    <TaskModal onClose={props.onClose}>
      {/* <TaskModal> */}
      <TaskStyles>
        <h2>Edit your task</h2>
        <input
          defaultValue={props.selectedTaskText}
          onChange={startEditTaskHandler}
        />
        {/* <Button onClick={props.onClose}>Close</Button> */}
        <ButtonSection>
          <Button onClick={props.onClose}>BACK</Button>
          <Button onClick={updateTaskHandler}>UPDATE</Button>
        </ButtonSection>
      </TaskStyles>
    </TaskModal>
  );
};

export default TaskOverlay;
