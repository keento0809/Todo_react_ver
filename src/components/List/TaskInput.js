import React from "react";
import styled from "styled-components";

const InputStyle = styled.div`
  padding: 2rem 0;
`;

const TaskInput = () => {
  return (
    <InputStyle>
      <div>
        <input />
      </div>
    </InputStyle>
  );
};

export default TaskInput;
