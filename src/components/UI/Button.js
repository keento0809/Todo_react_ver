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
  padding: 1rem 3rem;
  appearance: none;
`;

const Button = (props) => {
  return <ButtonStyle onClick={props.onClick}>{props.children}</ButtonStyle>;
};

export default Button;
