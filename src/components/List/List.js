import React, { useState, useContext, useRef } from "react";
import ListContext from "../../contexts/list-context";
import AddItem from "../../actions/list-action";
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

const UlStyles = styled.ul`
  width: 90%;
  padding: 0;
  margin: 0 auto;
`;

const List = () => {
  const listCtx = useContext(ListContext);
  const [textValue, setTextValue] = useState("");

  const textInputRef = useRef();

  const changeTextValueHandler = (e) => {
    setTextValue(e.target.value);
    const textLength = textInputRef.current.value.trim().length;

    if (textLength > 3) {
      console.log("The length of input is enough.");
    }
  };

  const addItemHandler = () => {
    listCtx.dispatchAction(AddItem(textValue));
    // listCtx.dispatchAction({ type: "ADD_ITEM", payload: textValue });
    setTextValue("");
  };

  return (
    <div>
      <input
        ref={textInputRef}
        value={textValue}
        type="text"
        onChange={changeTextValueHandler}
      />
      <button onClick={addItemHandler}>ADD</button>
      <UlStyles>
        {listCtx.state.items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </UlStyles>
    </div>
  );
};

export default List;
