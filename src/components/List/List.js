import React, { useState, useContext, useRef, useEffect } from "react";
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
  const [filteredItems, setFilteredItems] = useState(listCtx.items);
  // state for searchInput
  const [searchValue, setSearchValue] = useState("");
  const [textIsValid, setTextIsValid] = useState(null);
  const [textTouched, setTextTouched] = useState(null);

  const textInputRef = useRef();

  const changeTextValueHandler = (e) => {
    const textLength = textInputRef.current.value.trim().length;
    // if(textLength !== '') setTextTouched
    if ((textLength < 2 && textTouched) || (textLength > 16 && textTouched)) {
      // console.log("Text invalid");
      setTextIsValid(false);
    } else {
      // console.log("Text valid!!");
      setTextIsValid(true);
    }
    // Just forward value, do not execute action here!!
    setTextValue(e.target.value);
  };

  const textInputBlurHandler = (e) => {
    // console.log("Blur !!");
    setTextTouched(true);
  };

  const regex = new RegExp(searchValue, "gi");

  useEffect(() => {
    // const filteredItems = listCtx.items;
    // const filteredItems = listCtx.items.filter((item) => item.match(regex));

    setFilteredItems(
      // listCtx.items.filter((item) => item.includes(searchValue))
      listCtx.items.filter((item) => item.match(regex))
      // filteredItems.map((item) => {
      //   const regexItem = item.replace(
      //     regex,
      //     `${(<span className="highlight">{searchValue}</span>)}`
      //   );
      //   return regexItem;
      // })
    );
    // console.log(filteredItems);
  }, [listCtx.items, textValue, searchValue]);

  const searchChangeHandler = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  const addItemHandler = (item) => {
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
    textValue.trim().length > 2 && textValue.trim().length < 16;
  const textInputIsInvalid = !textIsValid && textTouched;

  const inputClassName = `${textInputIsInvalid ? "invalid" : ""}`;
  // console.log(inputClassName);

  return (
    <MainStyle>
      <Card>
        <h3>Welcome! {authCtx.state.userInfo.username}!</h3>
        <p>Now, {listCtx.totalTask} tasks left.</p>
        <InputSection
          // className={`${!textIsValid ? "invalid" : ""}`}
          className={inputClassName}
          ref={textInputRef}
          value={textValue}
          onTextChange={changeTextValueHandler}
          onChange={searchChangeHandler}
          onAdd={addItemHandler}
          onBlur={textInputBlurHandler}
        />
        {/* {!textIsValid && <p>Please enter a valid text (2-15) </p>} */}
        {textInputIsInvalid && (
          <Warning>
            <p>Please enter a valid text (2-15) </p>
          </Warning>
        )}
      </Card>
      {/* <UlStyle>
        {filteredItems.map((item, index) => (
          <Card key={index} id={index} onClick={props.onOpen}>
            <ListItem
              id={index}
              task={item}
              onOpen={props.onOpen}
              onRemove={removeItemHandler}
            />
          </Card>
        ))}
      </UlStyle> */}
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
