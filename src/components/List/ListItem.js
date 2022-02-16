import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const ListItemStyle = styled.div`
  width: 80%;
  min-width: 250px;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const ListItem = (props) => {
  return (
    <ListItemStyle>
      <div>
        <span>{props.id}.</span>
        <span>{props.task}</span>
      </div>
      <div>
        <span onClick={props.onOpen}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </span>
        <span onClick={props.onRemove.bind(null, props.id)}>
          <FontAwesomeIcon icon={faTrashCan} />
        </span>
      </div>
    </ListItemStyle>
  );
};

export default ListItem;
