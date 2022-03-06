import React, { useContext } from "react";
import AuthContext from "../../contexts/auth-context";
import styled from "styled-components";
import ListContext from "../../contexts/list-context";

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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
  cursor: pointer;

  & span {
    display: block;
    width: 24px;
    height: 3px;
    margin-bottom: 3px;
    background: #fff;
  }
`;

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const listCtx = useContext(ListContext);

  // Test !!!!!!!!
  const proceedToLogOutHandler = () => {
    listCtx.resetList();
    authCtx.logoutUser();
  };

  return (
    <HeaderStyle>
      <HeaderContainer>
        <h2>React ToDo</h2>
        {/* <MenuBar onClick={props.onOpen}> */}
        {/* <MenuBar>
          <span></span>
          <span></span>
          <span></span>
        </MenuBar> */}
        {!authCtx.state.isLogIn && (
          <MenuBar>
            <span></span>
            <span></span>
            <span></span>
          </MenuBar>
        )}
        {authCtx.state.isLogIn && (
          // Default code. DO NOT CHANGE !!!
          // <button onClick={authCtx.logoutUser}>Logout</button>
          <button onClick={proceedToLogOutHandler}>Logout</button>
        )}
      </HeaderContainer>
    </HeaderStyle>
  );
};

export default Header;
