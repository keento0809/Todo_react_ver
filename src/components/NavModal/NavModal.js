import React from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import styled from "styled-components";

const NavModal = (props) => {
  const NavModalStyle = styled.div`
    text-align: center;
  `;

  return (
    <Modal onClose={props.onClose}>
      <NavModalStyle>
        <h2>
          <a>Login</a>
        </h2>
        <Button onClick={props.onClose}>Close</Button>
      </NavModalStyle>
    </Modal>
  );
};

export default NavModal;
