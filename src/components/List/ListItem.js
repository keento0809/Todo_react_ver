import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import Task from "../Task/Task";

const ListItemStyle = styled.div`
  width: 80%;
  min-width: 250px;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const IconStyle = styled.div`
  display: inline-block;
  margin-right: 1rem;
`;

const testBool = false;

const ListItem = (props) => {
  const [testBool, setTestBool] = useState(false);

  const testHandler = (id, task) => {
    setTestBool(true);
    console.log(id, task, "test has done.");
  };

  const testCloseHandler = () => {
    setTestBool(false);
  };

  return (
    <ListItemStyle>
      {testBool && <Task onTask={props.task} onClose={testCloseHandler} />}
      <div>
        <span>{props.task}</span>
      </div>
      <div>
        {/* <IconStyle onClick={props.onOpen.bind(null, props.task)}> */}
        <IconStyle onClick={testHandler.bind(null, props.id, props.task)}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </IconStyle>
        <IconStyle onClick={props.onRemove.bind(null, props.id)}>
          <FontAwesomeIcon icon={faTrashCan} />
        </IconStyle>
      </div>
    </ListItemStyle>
  );
};

export default ListItem;
