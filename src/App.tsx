// -- App.tsx --
import "./App.css";
import "bulmaswatch/superhero/bulmaswatch.min.css";
// import CodeCell from "./components/CodeCell";
import TextEditor from "./components/TextEditor";

const App = () => {
  return (
    <div className="app">
      <TextEditor />
    </div>
  );
};

export default App;
