import React, { useState, useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import ListContext from "../../contexts/list-context";
import ListItem from "./ListItem";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styled from "styled-components";

const InputStyle = styled.div`
  padding: 2rem 0;
`;

const UlStyle = styled.ul`
  width: 100%;
  padding: 2rem 0;
  margin: 0 auto 1rem;
`;

const List = (props) => {
  const listCtx = useContext(ListContext);
  const [textValue, setTextValue] = useState("");
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

  const addItemHandler = () => {
    const textChecker = textInputRef.current.value.trim().length;

    if (textChecker < 2 || textChecker > 16) {
      setTextIsValid(false);
      alert("Please enter a valid text (2-15)");
      return;
    }
    // listCtx.addToList(textValue);
    listCtx.addToList(textValue);
    setTextValue("");
  };

  // const editItemHandler = (id) => {
  //   console.log("Now editing.");
  // };

  const removeItemHandler = (id) => {
    console.log(id);
    listCtx.removeFromList(id);
  };

  return (
    <div>
      <InputStyle>
        <div>
          <input
            ref={textInputRef}
            value={textValue}
            type="text"
            onChange={changeTextValueHandler}
          />
        </div>
        <Button onClick={addItemHandler}>ADD</Button>
        {!setTextIsValid && <p>Please enter a valid text (2-15) </p>}
      </InputStyle>
      <UlStyle>
        {listCtx.state.items.map((item, index) => (
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
    </div>
  );
};

export default List;
