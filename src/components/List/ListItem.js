import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import ListContext from "../../contexts/list-context";
import { Fragment } from "react/cjs/react.production.min";

const ListItemStyle = styled.div`
  width: 80%;
  min-width: 250px;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  & span.highlight {
    background: yellow;
  }
`;

const IconStyle = styled.div`
  display: inline-block;
  margin-right: 1rem;
`;

const ListItem = (props) => {
  // It could be possible to refactor?
  const taskInfo = [props.id, props.task];

  return (
    <Fragment>
      <ListItemStyle key={props.key}>
        <div>
          <span>{props.task}</span>
        </div>
        <div>
          <IconStyle onClick={props.onOpen.bind(null, taskInfo)}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </IconStyle>
          <IconStyle onClick={props.onRemove.bind(null, props.id)}>
            <FontAwesomeIcon icon={faTrashCan} />
          </IconStyle>
        </div>
      </ListItemStyle>
    </Fragment>
  );
};

export default ListItem;
