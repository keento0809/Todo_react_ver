import React from "react";
import styled from "styled-components";

const InputStyle = styled.div`
  padding: 2rem 0;
`;

const SearchInput = (props) => {
  return (
    <InputStyle>
      <div>
        <input
          type="text"
          placeholder="Search Task"
          onChange={props.onChange}
        />
      </div>
    </InputStyle>
  );
};

export default SearchInput;
