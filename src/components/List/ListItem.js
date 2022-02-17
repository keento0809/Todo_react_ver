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

const IconStyle = styled.div`
  display: inline-block;
  margin-right: 1rem;
`;

const ListItem = (props) => {
  return (
    <ListItemStyle>
      <div>
        <span>{props.id}.</span>
        <span>{props.task}</span>
      </div>
      <div>
        <IconStyle onClick={props.onOpen.bind(null, props.task)}>
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
