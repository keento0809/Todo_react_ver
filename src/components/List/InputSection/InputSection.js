import React from "react";
import SearchInput from "./SearchInput";
import Button from "../../UI/Button";
import styled from "styled-components";
import TaskInput from "./TaskInput";

const InputStyle = styled.div`
  text-align: center;
`;

const InputSection = React.forwardRef((props, ref) => {
  return (
    <InputStyle>
      <SearchInput
        label="SEARCH TASK"
        onChange={props.onChange}
        inputs={{ type: "text", placeholder: "Text Here" }}
      />
      <TaskInput
        ref={ref}
        value={props.value}
        label="ADD NEW TASK"
        inputs={{
          type: "text",
          placeholder: "Text Here",
        }}
        onChange={props.onTextChange}
      />
      <Button onClick={props.onAdd}>ADD</Button>
    </InputStyle>
  );
});

export default InputSection;
