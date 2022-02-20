import React from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import styled from "styled-components";

const NavModalStyle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const NavModal = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <NavModalStyle>
        <h2>
          <a>Login</a>
        </h2>
        <Button onClick={props.onClose}>Close</Button>
        <Button onClick={props.onLogout}>Logout</Button>
      </NavModalStyle>
    </Modal>
  );
};

export default NavModal;
