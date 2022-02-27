import React from "react";
import styled from "styled-components";

// const ButtonStyle = styled.div`
const ButtonStyle = styled.button`
  /* max-width: 50px; */
  display: inline-block;
  background-color: #fff;
  border: 3px solid #f16cf3;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  padding: 0.5rem 1rem;
  min-width: 40px;
  appearance: none;
  transition: all 0.2s ease-out;

  &:hover {
    color: #fff;
    background: #f16cf3;
    box-shadow: 0.5px 0.5px 2px #f16cf3;
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    background-color: rgba(204, 204, 204, 0.4);
    color: rgba(41, 41, 41, 0.4);
    border-color: rgba(204, 204, 204, 0.4);
    cursor: not-allowed;
  }
`;

const Button = (props) => {
  console.log(props.isDisabled);

  return (
    <ButtonStyle disabled={props.isDisabled} onClick={props.onClick}>
      {props.children}
    </ButtonStyle>
  );
};

export default Button;
