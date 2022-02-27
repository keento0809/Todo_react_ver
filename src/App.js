import React from "react";
import Route from "./components/Route/Route";
import ListProvider from "./contexts/ListProvider";
import Styled from "styled-components";
import classes from "./App.module.css";

const AppStyle = Styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => {
  const testArray = [
    { id: 1, text: "aaa" },
    { id: 2, text: "bbb" },
  ];

  return (
    <ListProvider>
      <AppStyle className={classes.app}>
        <Route />
      </AppStyle>
    </ListProvider>
  );
};

export default App;
