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
        className={props.className}
        label="SEARCH TASK"
        onChange={props.onChange}
        onBlur={props.onBlur}
        inputs={{ type: "text", placeholder: "Text Here" }}
      />
      <TaskInput
        className={props.className}
        ref={ref}
        value={props.value}
        label="ADD NEW TASK"
        inputs={{
          type: "text",
          placeholder: "Text Here",
        }}
        onChange={props.onTextChange}
        onBlur={props.onBlur}
      />
      {/* Default code. DO NOT CHANGE !!! */}
      <Button onClick={props.onAdd} isDisabled={props.isDisabled}>
        {/* TEST */}
        {/* 
        <Button
        onClick={props.onAddTaskToDataBase.bind(null, { text: props.value })}
        isDisabled={props.isDisabled}
      >
      */}
        ADD
      </Button>
    </InputStyle>
  );
});

export default InputSection;
