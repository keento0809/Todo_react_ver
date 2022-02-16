import React, { Fragment } from "react";
import List from "../List/List";
// import ListProvider from "../../contexts/ListProvider";

const Main = (props) => {
  return (
    <Fragment>
      <List onOpen={props.onOpen} />
    </Fragment>
  );
};

export default Main;
