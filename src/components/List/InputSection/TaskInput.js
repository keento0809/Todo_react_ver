import React from "react";
import styled from "styled-components";

const InputStyle = styled.div`
  padding: 2rem 0;
`;

const TaskInput = React.forwardRef((props, ref) => {
  return (
    <InputStyle>
      <div>
        <input
          // Not props.ref, ref itself
          ref={ref}
          value={props.value}
          onChange={props.onChange}
          {...props.inputs}
        />
      </div>
    </InputStyle>
  );
});

export default TaskInput;
