import React, { useState, useContext, useRef } from "react";
import ListContext from "../../contexts/list-context";
import AuthContext from "../../contexts/auth-context";
// import ListItem from "./ListItem";
import TaskList from "./TaskList";
import InputSection from "./InputSection/InputSection";
import Card from "../UI/Card";
import styled from "styled-components";

const MainStyle = styled.div`
  padding-top: 44px;
  margin-top: 20px;
  & h3 {
    text-align: center;
  }
`;

const Warning = styled.div`
  color: #fb4b4b;
  padding: 1rem;
  & p {
    margin: 0;
  }
`;

const List = (props) => {
  const listCtx = useContext(ListContext);
  const authCtx = useContext(AuthContext);
  // state for textInput
  const [textValue, setTextValue] = useState("");
  // state for searchInput
  const [searchValue, setSearchValue] = useState("");
  const [textIsValid, setTextIsValid] = useState(null);
  const [textTouched, setTextTouched] = useState(null);

  // state for adding task to firebase
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const textInputRef = useRef();

  const changeTextValueHandler = (e) => {
    const textLength = textInputRef.current.value.trim().length;
    // if(textLength !== '') setTextTouched
    if ((textLength < 2 && textTouched) || (textLength > 16 && textTouched)) {
      setTextIsValid(false);
    } else {
      setTextIsValid(true);
    }
    // Just forward value, do not execute action here!!
    setTextValue(e.target.value);
  };

  const textInputBlurHandler = (e) => {
    setTextTouched(true);
  };

  const regex = new RegExp(searchValue, "gi");

  const searchChangeHandler = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  const addTaskToDataBaseHandler = async (value) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://react-costum-components-default-rtdb.firebaseio.com/tests.json",
        {
          method: "POST",
          body: JSON.stringify({
            text: value.text,
          }),
        }
      );

      const data = await response.json();

      const generatedId = data.name;
      const newData = {
        id: generatedId,
        text: value.text,
      };

      console.log(newData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const addItemHandler = () => {
    const textChecker = textInputRef.current.value.trim().length;

    if (textChecker < 2 || textChecker > 16) {
      setTextIsValid(false);
      alert("Please enter a valid text (2-15)");
      return;
    }
    listCtx.addToList(textValue);
    setTextValue("");
    setTextTouched(false);
  };

  const removeItemHandler = (id) => {
    console.log(id);
    listCtx.removeFromList(id);
  };

  const textInputIsValid =
    textValue.trim().length > 1 && textValue.trim().length < 16;
  const textInputIsInvalid = !textIsValid && textTouched;

  const inputClassName = `${textInputIsInvalid ? "invalid" : ""}`;

  return (
    <MainStyle>
      <Card>
        <h3>Welcome! {authCtx.state.userInfo.username}!</h3>
        <p>Now, {listCtx.totalTask} tasks left.</p>
        <InputSection
          className={inputClassName}
          ref={textInputRef}
          value={textValue}
          onTextChange={changeTextValueHandler}
          onChange={searchChangeHandler}
          onAdd={addItemHandler}
          onBlur={textInputBlurHandler}
          isDisabled={!textInputIsValid}
          onAddTaskToDataBase={addTaskToDataBaseHandler}
        />
        {textInputIsInvalid && (
          <Warning>
            <p>Please enter a valid text (2-15) </p>
          </Warning>
        )}
      </Card>
      <TaskList
        textValue={textValue}
        searchValue={searchValue}
        onRemove={removeItemHandler}
        regex={regex}
      />
    </MainStyle>
  );
};

export default List;
