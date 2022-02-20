import React from "react";
import styled from "styled-components";

const InputStyle = styled.div`
  padding: 2rem 0;
  text-align: center;

  & input {
    border: 3px solid #07ffab;
    border-radius: 8px;
    padding: 0.2rem 0.4rem;
    display: inline-block;
    width: 100%;
    max-width: 280px;
  }
`;

const Input = React.forwardRef((props, ref) => {
  return (
    <InputStyle>
      <input type={props.type} ref={ref} />
    </InputStyle>
  );
});

export default Input;
