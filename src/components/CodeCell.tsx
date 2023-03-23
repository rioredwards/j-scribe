// -- App.tsx --
import "./CodeCell.css";
import { useState } from "react";
import Preview from "./Preview";
import CodeEditor from "./CodeEditor";
import bundle from "../bundler";
import Resizable from "./Resizable";

const CodeCell = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <Resizable direction="vertical">
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
    </Resizable>
  );
};

export default CodeCell;
