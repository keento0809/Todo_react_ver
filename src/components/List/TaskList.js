import React, { useState, useEffect, useContext } from "react";
import ListContext from "../../contexts/list-context";
import ListItem from "./ListItem";
import Card from "../UI/Card";
import styled from "styled-components";

const UlStyle = styled.ul`
  width: 100%;
  padding: 2rem 0;
  margin: 0 auto 1rem;
  overflow: auto;
`;

const TaskList = (props) => {
  const listCtx = useContext(ListContext);
  const [filteredItems, setFilteredItems] = useState(listCtx.items);

  useEffect(() => {
    setFilteredItems(
      listCtx.items.filter((item) => item.includes(props.searchValue))
    );
  }, [listCtx.items, props.textValue, props.searchValue]);

  return (
    <UlStyle>
      {filteredItems.map((task, index) => {
        {
          console.log(task);
        }
        return (
          <Card key={index} id={index} onClick={props.onOpen}>
            <ListItem
              id={index}
              task={task}
              onOpen={props.onOpen}
              onRemove={props.onRemove}
            />
          </Card>
        );
      })}
    </UlStyle>
  );
};

export default TaskList;
