// -- App.tsx --
import "./App.css";
import "bulmaswatch/superhero/bulmaswatch.min.css";
import CodeCell from "./components/CodeCell";

const App = () => {
  return (
    <div className="app">
      <CodeCell />
      <CodeCell />
    </div>
  );
};

export default App;
