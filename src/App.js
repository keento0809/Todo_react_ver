import Main from "./components/Main/Main";
import classes from "./App.module.css";

const initialState = {
  items: ["aaaa"],
};

const App = () => {
  return (
    <div className={classes.app}>
      <Main />
    </div>
  );
};

export default App;
