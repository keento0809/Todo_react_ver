import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react/cjs/react.production.min";
import styled from "styled-components";

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
`;

const Backdrop = (props) => {
  return <BackdropStyle onClick={props.onClose}></BackdropStyle>;
};

const ModalOverlay = (props) => {
  return <div>{props.children}</div>;
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
