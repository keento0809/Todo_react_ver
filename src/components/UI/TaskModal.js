import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react/cjs/react.production.min";
import styled from "styled-components";

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 5;
`;

const ModalStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 250px;
  padding: 1.5rem 3rem;
  /* padding: 0.5rem 1rem; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  background: #bbffe8;
  z-index: 10;
`;

const TaskBackdrop = (props) => {
  return <BackdropStyle onClick={props.onClose}></BackdropStyle>;
};

const TaskModalOverlay = (props) => {
  return <ModalStyle>{props.children}</ModalStyle>;
};

const portalElement = document.getElementById("overlays");

const TaskModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <TaskBackdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <TaskModalOverlay>{props.children}</TaskModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default TaskModal;
