// -- App.tsx --
import "./App.css";
import "bulmaswatch/superhero/bulmaswatch.min.css";
import { useState } from "react";
import CodeEditor from "./components/codeEditor";
import Preview from "./components/Preview";
import bundle from "./bundler";

const App = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div className="app">
      <CodeEditor
        initialValue='console.log("hello");'
        onChange={(value) => setInput(value)}
      />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

export default App;
