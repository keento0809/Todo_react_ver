import React from "react";
import SearchInput from "./SearchInput";
import Button from "../../UI/Button";
import styled from "styled-components";

const InputStyle = styled.div`
  padding: 2rem 0;
`;

const InputSection = React.forwardRef((props, ref) => {
  return (
    <div>
      <SearchInput onChange={props.onChange} />
      <InputStyle>
        <div>
          <input
            // Not props.ref, ref itself
            ref={ref}
            value={props.value}
            type="text"
            placeholder="New Task"
            onChange={props.onTextChange}
          />
        </div>
        <Button onClick={props.onAdd}>ADD</Button>
      </InputStyle>
    </div>
  );
});

export default InputSection;
