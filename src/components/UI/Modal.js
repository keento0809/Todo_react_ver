import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react/cjs/react.production.min";
import styled from "styled-components";

const Backdrop = (props) => {
  return <div></div>;
};

const ModalOverlay = (props) => {
  return <div>{props.children}</div>;
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>)}
    </Fragment>
  );
};

export default Modal;
