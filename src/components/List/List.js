import React, { useState, useContext } from "react";
import ListContext from "../../contexts/list-context";
import { addItem } from "../../actions/list-action";

const List = () => {
  const [textValue, setTextValue] = useState("");
  const { state, dispatch } = useContext(ListContext);

  const changeTextValueHandler = (e) => {
    setTextValue(e.target.value);
  };

  const addItemHandler = () => {
    console.log(textValue);
    dispatch(addItem(textValue));
  };

  return (
    <div>
      <input value={textValue} onChange={changeTextValueHandler} />
      <button onClick={addItemHandler}>ADD</button>
      {state.items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default List;
