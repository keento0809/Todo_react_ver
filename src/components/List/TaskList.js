import React, { Fragment, useState, useEffect, useContext } from "react";
import ListContext from "../../contexts/list-context";
import ListItem from "./ListItem";
import Card from "../UI/Card";
import styled from "styled-components";
import TaskOverlay from "../TaskOverlay/TaskOverlay";

const UlStyle = styled.ul`
  width: 100%;
  padding: 2rem 0;
  margin: 0 auto 1rem;
  overflow: auto;
`;

const TaskList = (props) => {
  const listCtx = useContext(ListContext);
  const [filteredItems, setFilteredItems] = useState(listCtx.items);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState();
  const [selectedTaskText, setSelectedTaskText] = useState("");

  const openTaskModalHandler = (taskInfo) => {
    const selectedTaskId = taskInfo[0];
    const selectedTaskText = taskInfo[1];
    console.log(selectedTaskId);
    console.log(selectedTaskText);
    setSelectedTaskId(selectedTaskId);
    setSelectedTaskText(selectedTaskText);
    setIsTaskModalOpen(true);
  };

  const closeTaskModalHandler = () => {
    setIsTaskModalOpen(false);
  };

  useEffect(() => {
    setFilteredItems(
      listCtx.items.filter((item) => item.includes(props.searchValue))
    );
  }, [listCtx.items, props.textValue, props.searchValue, selectedTaskText]);

  return (
    <Fragment>
      {isTaskModalOpen && (
        <TaskOverlay
          onClose={closeTaskModalHandler}
          selectedTaskId={selectedTaskId}
          selectedTaskText={selectedTaskText}
          onSetSelectedTaskText={setSelectedTaskText}
        />
      )}
      <UlStyle>
        {filteredItems.map((task, index) => {
          return (
            <Card key={index} id={index} onClick={props.onOpen}>
              <ListItem
                id={index}
                task={task}
                onOpen={openTaskModalHandler}
                onClose={closeTaskModalHandler}
                onRemove={props.onRemove}
              />
            </Card>
          );
        })}
      </UlStyle>
    </Fragment>
  );
};

export default TaskList;
