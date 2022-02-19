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
  background: rgba(255, 255, 255, 0.9);
  /* z-index: 5; */
`;

const ModalStyle = styled.div`
  position: absolute;
  /* top: 50%;
  left: 50%; */
  top: 4.93%;
  right: 0%;
  height: 100%;
  /* transform: translate(-50%, -50%); */
  /* padding: 1rem 3rem; */
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  /* border-radius: 12px; */
  background: #787878;
  z-index: 10;
`;

const Backdrop = (props) => {
  return <BackdropStyle onClick={props.onClose}></BackdropStyle>;
};

const ModalOverlay = (props) => {
  return <ModalStyle>{props.children}</ModalStyle>;
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
