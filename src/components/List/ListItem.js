import React from "react";
import styled from "styled-components";

const ListItem = (props) => {
  return (
    <li>
      <span>{props.id}.</span>
      <span>{props.task}</span>
    </li>
  );
};

export default ListItem;
