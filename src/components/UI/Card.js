import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 0 auto 0.8rem;
  text-align: left;
  list-style: none;
  border: 1px solid #bbffe8;
  border-radius: 12px;
  padding: 1rem 0;
  font-weight: bold;
  background: #bbffe8;

  & span {
    display: inline-block;
    padding-left: 1rem;
  }

  & span:nth-child(2) {
    padding-left: 0.5rem;
  }
`;

const Card = (props) => {
  return <CardStyle>{props.children}</CardStyle>;
};

export default Card;
