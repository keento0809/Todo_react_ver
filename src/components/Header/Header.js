import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 60px;
  background: #787878;
  color: #fff;
  letter-spacing: -2px;
`;

const HeaderContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h1 {
    margin: 0;
    line-height: 60px;
  }
`;

const MenuBar = styled.div`
  padding-top: 0.2rem;

  & span {
    display: block;
    width: 30px;
    height: 4px;
    margin-bottom: 4px;
    background: #fff;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderContainer>
        <h1>React ToDo</h1>
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
