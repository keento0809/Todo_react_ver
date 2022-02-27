import React, { useState } from "react";
import styled from "styled-components";

const InputStyle = styled.div`
  padding: 2rem 0;
  /* text-align: center; */

  & input {
    outline: none;
    border: 3px solid #07ffab;
    border-radius: 8px;
    padding: 0.2rem 0.4rem;
    width: 100%;
    margin: 0 auto;
    max-width: 240px;
  }

  & input.invalid {
    border-color: red;
    background: #fbdada;
  }
`;

const LabelStyle = styled.label`
  display: block;
  padding-bottom: 0.5rem;
  font-weight: bold;
  letter-spacing: -1px;
`;

const TaskInput = React.forwardRef((props, ref) => {
  const [isTextValid, setIsTextValid] = useState();

  const validateTextHandler = () => {
    props.onChange();
    console.log(props.value);
  };

  return (
    <InputStyle>
      <div>
        <LabelStyle>{props.label}</LabelStyle>
        <input
          className={props.className}
          // Not props.ref, ref itself
          ref={ref}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          // onChange={validateTextHandler}
          {...props.inputs}
        />
      </div>
    </InputStyle>
  );
});

export default TaskInput;
