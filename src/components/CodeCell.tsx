// -- App.tsx --
import "./CodeCell.css";
import { useState } from "react";
import Preview from "./Preview";
import CodeEditor from "./CodeEditor";
import bundle from "../bundler";

const CodeCell = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div className="code-cell">
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

export default CodeCell;
