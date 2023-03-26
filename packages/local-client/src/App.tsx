// -- App.tsx --
import "./App.css";
import "bulmaswatch/superhero/bulmaswatch.min.css";
// import CodeCell from "./components/CodeCell";
// import TextEditor from "./components/TextEditor";
import CellList from "./components/CellList";

const App = () => {
  return (
    <div className="app">
      <CellList />
    </div>
  );
};

export default App;
