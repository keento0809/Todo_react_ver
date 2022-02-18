import React from "react";
import SearchInput from "./SearchInput";
import Button from "../../UI/Button";
import styled from "styled-components";
import TaskInput from "./TaskInput";

const InputStyle = styled.div`
  padding: 2rem 0;
`;

const InputSection = React.forwardRef((props, ref) => {
  return (
    <div>
      <SearchInput onChange={props.onChange} />
      <TaskInput
        ref={ref}
        value={props.value}
        inputs={{
          type: "text",
          placeholder: "New Task",
        }}
        onChange={props.onTextChange}
      />
      <Button onClick={props.onAdd}>ADD</Button>
    </div>
  );
});

export default InputSection;
