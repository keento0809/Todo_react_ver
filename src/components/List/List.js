import React, { useState, useContext, useRef, useEffect } from "react";
import ListContext from "../../contexts/list-context";
import AuthContext from "../../contexts/auth-context";
import ListItem from "./ListItem";
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

const UlStyle = styled.ul`
  width: 100%;
  padding: 2rem 0;
  margin: 0 auto 1rem;
  overflow: auto;
`;

const List = (props) => {
  const listCtx = useContext(ListContext);
  const authCtx = useContext(AuthContext);
  // state for textInput
  const [textValue, setTextValue] = useState("");
  // const [filteredItems, setFilteredItems] = useState(listCtx.state.items);
  const [filteredItems, setFilteredItems] = useState(listCtx.items);
  // state for searchInput
  const [searchValue, setSearchValue] = useState("");
  const [textIsValid, setTextIsValid] = useState(true);

  const textInputRef = useRef();

  const changeTextValueHandler = (e) => {
    const textLength = textInputRef.current.value.trim().length;
    // Just forward value, do not execute action here!!
    setTextValue(e.target.value);

    if (textLength > 3) {
      console.log("The length of input is enough.");
    }
  };

  useEffect(() => {
    // filtering items first, then map the list
    // console.log(listCtx.state.items[0]);
    setFilteredItems(
      // listCtx.state.items.filter((item) => item.includes(searchValue))
      listCtx.items.filter((item) => item.includes(searchValue))
    );
    console.log(filteredItems);
    // }, [listCtx.state.items, textValue, searchValue]);
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
    // listCtx.addToList({
    //   id: Math.floor(Math.random() * 10000) + 1,
    //   textValue: textValue,
    // });
    listCtx.addToList(textValue);
    setTextValue("");
  };

  const removeItemHandler = (id) => {
    console.log(id);
    listCtx.removeFromList(id);
  };

  return (
    <MainStyle>
      <Card>
        <h3>Welcome! {authCtx.state.userInfo.username}</h3>
        <InputSection
          ref={textInputRef}
          value={textValue}
          onTextChange={changeTextValueHandler}
          onChange={searchChangeHandler}
          onAdd={addItemHandler}
        />
        {!setTextIsValid && <p>Please enter a valid text (2-15) </p>}
      </Card>
      <UlStyle>
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
      </UlStyle>
    </MainStyle>
  );
};

export default List;
