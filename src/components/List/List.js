import React, { useState, useContext } from "react";
import ListContext from "../../contexts/list-context";
import AddItem from "../../actions/list-action";

const List = () => {
  const listCtx = useContext(ListContext);
  const [textValue, setTextValue] = useState();

  const changeTextValueHandler = (e) => {
    setTextValue(e.target.value);
  };

  const addItemHandler = () => {
    listCtx.dispatch(AddItem(textValue));
  };

  return (
    <div>
      <input type="text" onChange={changeTextValueHandler} />
      <button onClick={addItemHandler}>ADD</button>
      <ul>
        {listCtx.state.items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </ul>
    </div>
  );
};

export default List;
