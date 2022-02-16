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

  const textInputRef = useRef();

  const changeTextValueHandler = (e) => {
    // Just forward value, do not execute action here!!
    setTextValue(e.target.value);

    const textLength = textInputRef.current.value.trim().length;

    if (textLength > 3) {
      console.log("The length of input is enough.");
    }
  };

  const addItemHandler = () => {
    listCtx.addToList(textValue);
    setTextValue("");
  };

  const removeItemHandler = (id) => {
    console.log(id);
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
      </InputStyle>
      <UlStyle>
        {listCtx.state.items.map((item, index) => (
          <Card key={index} id={index} onClick={props.onOpen}>
            <ListItem id={index} task={item} />
            <span onClick={props.onOpen}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </span>
            <span onClick={removeItemHandler}>
              <FontAwesomeIcon icon={faTrashCan} />
            </span>
          </Card>
        ))}
      </UlStyle>
    </div>
  );
};

export default List;
