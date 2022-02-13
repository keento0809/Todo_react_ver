import Main from "./components/Main/Main";
import ListProvider from "./contexts/ListProvider";
import classes from "./App.module.css";

const App = () => {
  return (
    <ListProvider>
      <div className={classes.app}>
        <Main />
      </div>
    </ListProvider>
  );
};

export default App;
