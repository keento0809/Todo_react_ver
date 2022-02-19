import React from "react";
import styled from "styled-components";

const InputStyle = styled.div`
  padding: 2rem 0;
  text-align: center;

  & input {
    border: 3px solid #07ffab;
    border-radius: 8px;
    padding: 0.2rem 0.4rem;
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
