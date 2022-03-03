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

  const [fetchedTasks, setFetchedTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const openTaskModalHandler = (taskInfo) => {
    const selectedTaskId = taskInfo[0];
    const selectedTaskText = taskInfo[1];
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

  const fetchTaskListHandler = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://react-costum-components-default-rtdb.firebaseio.com/tasks.json"
      );
      if (!response.ok) {
        throw new Error("Something is wrong.");
      }
      const data = await response.json();

      const loadedData = [];

      for (const taskKey in data) {
        loadedData.push({
          id: taskKey,
          text: data[taskKey].text,
        });
      }

      console.log(loadedData);
      setFetchedTasks(loadedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTaskListHandler();
  }, []);

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
                // regex={props.regex}
              />
            </Card>
          );
        })}
        {/* {filteredItems.map((task,index) => {
          const regexTask = item.replace(
                regex,
                `${(<span className="highlight">{searchValue}</span>)}`
              );
          return (
          )
        })} */}
      </UlStyle>
      <UlStyle>
        {isLoading && <p>Loading...</p>}
        {!isLoading &&
          fetchedTasks.map((task, index) => {
            return (
              <Card key={task.id} id={index} onClick={props.onOpen}>
                <ListItem
                  id={index}
                  task={task.text}
                  onOpen={openTaskModalHandler}
                  onClose={closeTaskModalHandler}
                  onRemove={props.onRemove}
                />
                {/* <li key={task.id}>
                <p>{task.text}</p>
              </li> */}
              </Card>
            );
          })}
      </UlStyle>
    </Fragment>
  );
};

export default TaskList;
