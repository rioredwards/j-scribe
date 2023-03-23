// -- App.tsx --
import "./CodeCell.css";
import { useState, useEffect } from "react";
import Preview from "./Preview";
import CodeEditor from "./CodeEditor";
import bundle from "../bundler";
import Resizable from "./Resizable";

const initialCode = `const root = document.getElementById("root");
root.innerHTML = "<h1>Hello world!</h1>";`;

const CodeCell = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction="vertical">
      <div className="code-cell">
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={initialCode}
            onChange={(value) => setInput(value)}
          />
        </Resizable>
        <Preview code={code} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
