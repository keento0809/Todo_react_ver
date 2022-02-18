import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 100%; */
  background: #787878;
  color: #fff;
  letter-spacing: -1.5px;
`;

const HeaderContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h2 {
    margin: 0;
  }
`;

const MenuBar = styled.div`
  padding-top: 0.2rem;

  & span {
    display: block;
    width: 24px;
    height: 3px;
    margin-bottom: 3px;
    background: #fff;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderContainer>
        <h2>React ToDo</h2>
        <MenuBar>
          <span></span>
          <span></span>
          <span></span>
        </MenuBar>
      </HeaderContainer>
    </HeaderStyle>
  );
};

export default Header;
