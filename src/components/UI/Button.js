import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
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
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    background: #f16cf3;
    box-shadow: 0.5px 0.5px 2px #f16cf3;
  }
`;

const Button = (props) => {
  return <ButtonStyle onClick={props.onClick}>{props.children}</ButtonStyle>;
};

export default Button;
