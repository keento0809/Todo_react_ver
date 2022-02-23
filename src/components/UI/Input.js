import React from "react";
import styled from "styled-components";

const InputStyle = styled.div`
  padding: 2rem 0;
  text-align: center;
  display: flex;
  align-items: stretch;
  flex-direction: column;

  & label,
  & input {
    display: block;
  }

  & label {
    font-weight: bold;
    flex: 1;
    color: #464646;
    margin-bottom: 0.5rem;
  }

  & input {
    /* flex: 3; */
    font: inherit;
    padding: 0.2rem 0.4rem;
    border-radius: 8px;
    border: 3px solid #07ffab;
    width: 100%;
    margin: 0 auto;
    max-width: 280px;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }

  &.invalid input {
    border-color: red;
    background: #fbdada;
  }
`;

const Input = React.forwardRef((props, ref) => {
  return (
    <InputStyle className={`${props.isValid === false ? "invalid" : ""}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        ref={ref}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </InputStyle>
  );
});

export default Input;
