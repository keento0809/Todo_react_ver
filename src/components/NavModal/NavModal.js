import React, { useContext } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import AuthContext from "../../contexts/auth-context";
import styled from "styled-components";

const NavModalStyle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const NavModal = (props) => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.isLogin);

  return (
    <Modal onClose={props.onClose}>
      <NavModalStyle>
        <h2>
          <a>{authCtx.isLogin}</a>
        </h2>
        <Button onClick={props.onClose}>Close</Button>
        <Button onClick={authCtx.logoutUser}>Logout</Button>
      </NavModalStyle>
    </Modal>
  );
};

export default NavModal;
