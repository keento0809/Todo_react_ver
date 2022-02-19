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

  return (
    <Modal onClose={props.onClose}>
      <TaskStyle>
        {/* <div>
          {listCtx.state.items.map((item, index) => (
            <h2 key={index}>{item}</h2>
          ))}
        </div>
        <Button onClick={listCtx.removeFromList}>Done</Button> */}
        <h2>
          <a>Login</a>
        </h2>
        <Button onClick={props.onClose}>Close</Button>
      </TaskStyle>
    </Modal>
  );
};

export default Task;
