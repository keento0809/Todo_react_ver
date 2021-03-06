import React from "react";
import styled from "styled-components";

const InputStyle = styled.div`
  padding: 2rem 0;

  & input {
    outline: none;
    border: 3px solid #07ffab;
    border-radius: 8px;
    padding: 0.2rem 0.4rem;
    width: 100%;
    margin: 0 auto;
    max-width: 240px;
  }
`;

const LabelStyle = styled.label`
  display: block;
  padding-bottom: 0.5rem;
  font-weight: bold;
  letter-spacing: -1px;
`;

const SearchInput = (props) => {
  return (
    <InputStyle>
      <div>
        <LabelStyle>{props.label}</LabelStyle>
        <input onChange={props.onChange} {...props.inputs} />
      </div>
    </InputStyle>
  );
};

export default SearchInput;
