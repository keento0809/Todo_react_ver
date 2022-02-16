import React, { useState, useContext, useRef } from "react";
import ListContext from "../../contexts/list-context";
import { addTask, removeTask } from "../../actions/list-action";
import styled from "styled-components";

const ListDiv = styled.div`
  list-style: none;
  width: 90%;
  margin: 0 auto;
  border: 3px solid #888;

  & input {
    margin: 20px 2px 0 0;
    border: 3px solid pink;
  }
`;

const InputStyle = styled.div`
  padding: 2rem 0;
`;

const UlStyle = styled.ul`
  width: 100%;
  padding: 2rem 0;
  margin: 0 auto 1rem;
`;

const LiStyle = styled.li`
  width: 90%;
  margin: 0 auto 0.8rem;
  list-style: none;
  border: 1px solid aquamarine;
  border-radius: 12px;
  padding: 1rem 0;
  font-weight: bold;
  background: aquamarine;
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
    console.log("Works");
    listCtx.addToList(textValue);
    // listCtx.dispatchAction({ type: "ADD_ITEM", payload: textValue });
    setTextValue("");
  };

  return (
    <div>
      <InputStyle>
        <input
          ref={textInputRef}
          value={textValue}
          type="text"
          onChange={changeTextValueHandler}
        />
        <button onClick={addItemHandler}>ADD</button>
      </InputStyle>
      <UlStyle>
        {listCtx.state.items.map((item, index) => (
          <LiStyle key={index} onClick={props.onOpen}>
            {item}
          </LiStyle>
        ))}
      </UlStyle>
    </div>
  );
};

export default List;
